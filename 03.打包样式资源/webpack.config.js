/**
 * 所有构建工具都是基于Node.js平台运行的，模块化默认采用commonjs
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: path.resolve(__dirname, 'build')
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //use数组中loader的执行顺序：从右到左， 从下到上， 依序执行
          'style-loader', //创建一个style标签，将JS中的样式资源插入到head中生效
           'css-loader'// 将css文件变成commonjs的模块加载到JS中，里面内容是样式字符串
        ]
      },
      {
        test: /\.less$/,
        use: [
          //use数组中loader的执行顺序：从右到左， 从下到上， 依序执行
          'style-loader', //创建一个style标签，将JS中的样式资源插入到head中生效
           'css-loader',// 将css文件变成commonjs的模块加载到JS中，里面内容是样式字符串
          'less-loader'
        ]
      }
    ]
  },
  plugins: [

  ],
  mode: 'development'
}