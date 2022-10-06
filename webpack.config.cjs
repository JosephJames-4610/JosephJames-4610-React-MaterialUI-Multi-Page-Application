const { resolve } = require('path');

module.exports = {
  name: 'React Mi JS Compile',
  mode: 'development',
  entry: './src/components/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve( __dirname, 'clientlibs/js')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
