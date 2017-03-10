require('webpack');
require('webpack-dev-server');
var path = require('path');
module.exports = {
  entry: './app/App.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: '80'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  }
}