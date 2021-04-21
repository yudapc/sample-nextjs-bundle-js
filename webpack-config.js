const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    home: path.join(__dirname, './containers/home/library.tsx'),
    // productList: path.join(
    //   __dirname,
    //   './containers/productCatalog/library.tsx',
    // ),
  },
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'components/index.tsx'),
      '@containers': path.join(__dirname, 'containers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
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
    filename: '[name].bundle.js',
    library: ['prefix', '[name]'],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
};