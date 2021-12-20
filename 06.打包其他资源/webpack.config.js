const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.xports = {
  entry: './src/index.js',
  output : {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}