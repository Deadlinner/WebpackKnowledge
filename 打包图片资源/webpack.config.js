const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(bmp|png)$/, //处理不了html中引入的图片
        loader: 'file-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]'
        },
        type: 'javascript/auto'
      },
      {
        test: /\.html$/, //处理html文件的图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader', //html 引入文件使用ES6 module方式
        options: {
          // esModule: false
        }
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