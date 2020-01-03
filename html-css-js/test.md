1. 自我介绍，你的优势？

1. 介绍一下 CSS 盒模型（说了元素和盒子，标准的盒子和 ie 的盒子的宽度计算以及统一的方法），又问什么时候会是 ie 的那种（答了 ie6 及以下（应该还有7、8的怪异模式））。
```JS
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

1. W3C 标准盒模型：
属性width,height只包含内容content，不包含border和padding。
2. IE 盒模型：
属性width,height包含border和padding，指的是content+padding+border。
在ie8+浏览器中使用哪个盒模型可以由box-sizing(CSS新增的属性)控制，默认值为content-box，即标准盒模型；如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6,7,8中DOCTYPE缺失会触发IE模式。在当前W3C标准中盒模型是可以通过box-sizing自由的进行切换的。
content-box（标准盒模型）
width = 内容的宽度
height = 内容的高度
border-box（IE盒模型）
width = border + padding + 内容的宽度
height = border + padding + 内容的高度

```

1. CSS 选择器优先级怎么计算。
```
important>内联>id>类>标签|伪类|属性选择>伪对象>继承>通配符
```

1. position 的值，应用场景。
```
position：static 默认值
position：relative 相对定位
position：absolute 绝对定位
position：fixed 固定定位
position：sticky 粘性定位
```

1. JavaScript 数据类型？哪些存储在堆里哪些在栈里？你刚才说到栈后进先出，哪种数据结构先进先出(队列)？
```JS
JS的内存空间分为栈(stack)、堆(heap)、池(一般也会归类为栈中)。

其中栈存放变量，堆存放复杂对象，池存放常量，所以也叫常量池。

栈:
Sting
Number
Boolean
null
undefined
Symbol

堆:Array,Function,Object
```
1. 对象克隆(浅克隆和深克隆)

说一下 JavaScript 作用域？（答了目的和几种类型，新增的块级作用域）

事件流，事件***，点击一个div 里面的一系列 li 弹出它的 innerHTML 怎么做？ li 里面还有子元素，比如 span 怎么处理？

你看过哪些书？JS 高级程序设计哪部分让你印象深刻很有感悟？（其实答得有些后悔，应该说你不知道的 JS 里的感悟，因为高程更多是基础方面的）


轮播组件怎么无限滚动的？
让你做一个日历组件的思路，你觉得里面用到了哪些算法知识，核心功能是什么。在项目中用其他组件或者库用的多吗？


原生的 DOM 操作都有什么？增删改查都是哪些命令？
说一下闭包。闭包有什么缺点？
移动端适配怎么做？说到了淘宝的 flexiable 和 rem，又问知道 flexiable 的实现么？说了根据屏幕分辨率动态调整根元素的 font-size，又问还有呢？说了 viewport 又问还有吗。忘了。。
平常会去看规范吗？说了 ECMA-262，又问比如什么时候会去看？详细看过的有哪些？说了 MDN 讲的不够详细的时候，为了在知乎写答案更有说服力之类的，然后就去看了我知乎的答案。。

一个div实现旋转的太极图
垂直水平居中
animation
transform
position
flex布局的几个属性
ul和ol的区别，怎么互相转换
h1-h6标签语义化
使页面没有css的情况下，也能够呈现出很好的内容结构
标签语义化的目的就是对搜索引擎友好

将js代码注入到其中
解决：过滤header中出现的非法字符
ssr
判断页面是不是活动页面
计数器的使用
闭包
作用域

什么时候会看源码

node（不太会）
es6

事件捕获和事件冒泡
项目中用到的技术栈，还有vue的一些相关问题。
页面展示的过程，HTML，CSS，JavaScript的加载顺序，浏览器是怎样把页面绘出来的？
有一个表格信息，要求原生实现点击按钮绑定当前的价格更新，除了onclick，还有什么方法可以绑定事件吗？addEventListener 这个和onclick有什么区别？这里怎么发送异步请求？是用post还是get？为什么？
最近在实践中遇到的最棘手问题，怎么解决的？还有看过的哪些博客，复述一下别人的内容。
前端最吸引你的点是什么，为什么要成为一个前端工程师？

自我介绍 + 项目介绍
为什么选择前端？（因为本专业是计算机视觉，为什么不深入）
你对前端怎么了解？需要掌握哪些技能？
语义化的理解，有哪些元素，优点是什么？（利于SEO的原理是什么）
什么是CSS的盒子模型（box-sizing属性）
CSS实现一个宽高都不固定的页面模式，水平垂直均居中，怎样实现。（flex不能实现吗？）
JS数组的方法有哪些？两个问题：1、现在要实现在数组末尾加入一个元素，使得原数组不变，你有哪些方法？
```JS
// 改变原数组
var arr = []
arr.splice()
arr.reverse()
arr.fill()
arr.copyWithin()
arr.sort()
arr.push()
arr.pop()
arr.unshift()
arr.shift()

// 不改变原数组
var arr = []
arr.slice()
arr.map()
arr.forEach()
arr.every()
arr.some()
arr.filter()
arr.reduce()
arr.entries()
arr.find()
arr.concat('1',['2','3']) //[1,2,3]
```
（有两类：一类是原数组改变，一类是原数组不改变，使用时要多加区分）；2、如何实现查找两个数组的相同元素（我当时只想到了暴力遍历法，面试官的原意是：需要先判断数组里的数据类型，在进行比较）
深拷贝和浅拷贝的概念，本质区别是什么？如何实现深拷贝，有哪些方法（说了递归）简单点的呢？assign()了解过吗？
vue的组件化


