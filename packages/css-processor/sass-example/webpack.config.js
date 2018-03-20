const path = require('path')

module.exports = {
  entry: ['./js/app.js', './styles/main.scss'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          { loader: 'file-loader', options: { name: 'bundle.css', outputPath: 'css/' } },
          'extract-loader',
          'css-loader', // translates CSS into CommonJS modules 
          'postcss-loader', // Run post css actions
          'sass-loader' // compiles Sass to CSS
        ]
    }]
  }
}