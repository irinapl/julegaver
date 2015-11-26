/**
 * /webpack.config.js
 */

var webpack = require('webpack');
const isProd= process.env.NODE_ENV == 'production';

module.exports = {
  devtool: 'inline-source-map',

  entry: isProd ? [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/entry.js'
  ] : ['./src/entry.js'],

  output: {
    path: './public/',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: isProd ? ['babel'] : ['react-hot', 'babel'],
      exclude: /node_modules/,
    }]
  }
};
