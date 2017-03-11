require('webpack');
require('webpack-dev-server');
var path = require('path');
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
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  }
}
