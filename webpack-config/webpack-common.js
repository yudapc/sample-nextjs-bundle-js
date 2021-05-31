const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: path.join(__dirname, '../containers/home/library.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `stclyle` nodes from JS strings
          // 'style-loader', //3. Extract css into files
          MiniCssExtractPlugin.loader,
          'css-loader', //2. Turns css into commonjs
          // 'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
  resolve: {
    modules: [].concat('src', ['node_modules']),
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css', '.sass'],
  },
};