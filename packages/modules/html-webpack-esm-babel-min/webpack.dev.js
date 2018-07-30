const webpack = require('../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/webpack')
const path = require('path')
const UglifyJSPlugin = require('../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      include: [path.resolve(__dirname, 'js')],
      loader: 'babel-loader',

      options: {
        plugins: ['syntax-dynamic-import']
      },

      test: /\.js$/
    }]
  },

  entry: './js/main.mjs',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  plugins: [
    new UglifyJSPlugin()
  ]
}