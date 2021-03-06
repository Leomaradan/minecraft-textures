const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/minecraft-textures.js',
    library: 'minecraft-textures',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
