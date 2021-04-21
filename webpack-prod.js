const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack-config/webpack-common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './webpack-config/template/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: ['prefix', '[name]'],
    libraryTarget: 'umd',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'prefix-bundle.css' }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      '@containers': path.resolve(__dirname, './containers'),
    },
    modules: [].concat('src', ['node_modules']),
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css', '.sass'],
  },
});