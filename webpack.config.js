require('webpack');
require('webpack-dev-server');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    myWebsite: [
      'webpack-dev-server/client?http://localhost:8080',
      './app/App.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
