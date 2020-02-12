CommonJS
ES Modules



CommonJS 
// 问题1：多个js文件相互引用是如何处理的？
按顺序-镜像化-不会重复引用

// 问题2：module.exports 和 exports 的区别
var module = { exports: {} };
var exports = module.exports;

// your code
return module.exports;

可以看出:

最终导出的是module.exports
exports就是module.exports的一个引用, 帮助简化代码, 如module.exports.A = 1可以简写为exports.A = 1.
需要注意的:

如果对exports进行直接赋值, 如exports = 1, 将断开exports和module.exports之间的关系. 之后再怎么向exports上挂变量 (如exports.A = 1) 都不会被导出了.
这意味着exports的正确使用方法, 只有exports.A = B这种挂变量的形式.
exports = { A: 1 }并不会导出一个包含A属性的模块, 但是module.exports = { A: 1 }可以.
modules.exports一旦被直接赋值, 如modules.exports = 1, 也会断开它和exports之间的联系, 导致exports失去意义. 但是这种形式常常用来直接导出你想用到的数据类型, 如: (以下的D都来自var D = require('dep'))
modules.exports = [1, 2]就直接导出了一个数组, 可以D.push(3)
modules.exports = function () {}就直接导出了一个函数/类, 可以D()或者var d = new D()
依次类推, 还可以直接导出字符串等其他类型.
