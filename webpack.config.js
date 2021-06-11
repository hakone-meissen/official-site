const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: [
    './source/javascripts/site.js'
  ],
  output: {
    filename: 'site.js',
    path: __dirname + '/build/javascripts'
  },
  module: { //ここから追記
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  }
};