const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'js')],
      loader: 'babel-loader',

      options: {
        plugins: ['syntax-dynamic-import'],

        presets: [['env', {
          'modules': false
        }]]
      }

    }, {
      test: /\.(scss|css)$/,

      use: [{
        loader: 'file-loader',
        options: {
          name: 'bundle.css',
          outputPath: 'css/'
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },

  entry: ['./js/app.js', './scss/main.scss'],

  output: {
    filename: 'js/bundle.js',
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