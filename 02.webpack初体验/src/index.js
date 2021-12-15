/** 
  index.js 是webpack入口七点文件

  运行指令： webpack ./src/index.js -o ./build/built.js --mode=development
  webpack以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 文件
  整体打包环境，是开发环境

*/
import _ from 'lodash';
import print from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = print
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}