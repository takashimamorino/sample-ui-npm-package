const path = reaquire('path')

module.exports = {
  entry: './src/index.ts',
  optput: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }]
  },
  resolve: ['.js', '.json', '.ts', '.tsx']
}
