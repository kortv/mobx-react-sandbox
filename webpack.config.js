var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap!postcss-loader']}]
  },
  postcss: function () {
      return [autoprefixer, precss];
  },
};
