/**
 * loader ： 先下载，在使用
 * 
 * plugins： 下载， 引入， 使用
 */
const { resolve } = require("path");
const HtmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }) // 默认创建一个空的html文件，引入打包输出的所以资源
  ],
  mode: 'development'
}