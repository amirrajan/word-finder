var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        ignore: /(vendor\.js)/,
        test: /\.js$/,
        query: { presets: 'es2015' },
      }
    ]
  },
  externals: nodeModules
};
