### <center>fastClick 解析</center>

#### 为什么要用 fastClick.js,或者说 fastClick.js 的作用是什么

解决 click 点击 300ms 延迟,解决点击穿透问题

#### 什么是 click300ms 延迟

移动端页面对于触摸事件会有 300 毫秒的延迟，导致多数用户感觉移动设备上基于 HTML 的 web 应用界面响应速度慢

#### 什么是点击穿透

1. 如果有个蒙层,点击蒙层取消后,蒙层下边的页面相同位置也触发了 click 事件
1. 点击跳转页面,发现跳转过去的页面在相同位置的点击事件也被触发

#### 为什么会有 click300ms 延迟和点击穿透的问题

##### click300ms 延迟是为什么呢?

其实是移动端浏览器提供了一个特殊的功能：<b>双击放大</b> 引起的

```
历史故事:
这要追溯至 2007 年初。苹果公司在发布首款 iPhone 前夕，遇到一个问题 —— 当时的
网站都是为大屏幕设备所设计的。于是苹果的工程师们做了一些约定，应对 iPhone 这种
小屏幕浏览桌面端站点的问题。这当中最出名的，当属双击缩放(double tap to zoom)
但是这样有个问题:假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由
于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻
判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待
 300 毫秒，以判断用户是否再次点击了屏幕。对应的如果 300 毫秒内再次点击就等于双击,
 不然就是点击
 于是，300 毫秒延迟就这么诞生了。
由于苹果手机的成功,大部分浏览器都在后续发展中添加了双击放大的功能,
所以目前所有移动端浏览器都存在 300ms 的延迟
```

##### 点击穿透是为什么呢?

我个人理解,点击穿透其实就一种情况:<b>click 事件延迟导致的 click 事件目标转移.</b>就是原本该触发 click 的对象由于隐藏/页面跳转/滚动之类的操作导致 click 触发时的对象不是原本的生成这个事件的对象了
说到 click 就先理一下 click 的原理和 click 的执行顺序
#####click 描述：
在这个 DOM（或者冒泡这个 DOM）上手指触摸开始，且手指未在屏幕上移动，且在这个 DOM 元素上手指离开屏幕，且触摸和离开屏幕之间的间隔时间较短(长按也是一种事件)才能触发
#####click 事件的触发规则：
只有在被触发的时候，当前有 click 事件的元素显示，且在面朝用户的最前端时，才触发 click 事件。

##### 事件触发的顺序大体可以看做

touchstart->touchmove->touchend->300ms->click

##### 结论

写到这里其实可以得出:<b>绝大部分的 点击穿透 都是因为在触发 click 之前的 touchstart/touchmove/touchend 等事件里面页面发生了改变导致的 click 对象改变,并且新的对象正好绑定 click 事件或者默认有 click 事件被触发</b>

##### eg:

有个蒙层,蒙层下有个按钮绑定 click 事件,点击蒙层的时候触发了 touchstart 事件,关闭蒙层了,但是 300ms 以后 click 事件触发时已经没有蒙层了,根据上面写的 click 事件的触发规则,这个时候 click 触发在了按钮上,这就是我们平时遇到的点击蒙层却导致按钮被点击了,这是最常见的点击穿透

#### 当前情况

当前的 web 应用性能可以同原生应用匹敌的时代，所有的单击事件都有 300 毫秒延迟，必然是不可接受的。而且，随着响应式设计的逐步推进，开发者们已经根据设备本身的尺寸对站点进行了优化，也就逐渐淘汰了诸如双击缩放的约定。
并且 300ms 已经是体验的主要阻碍了,浏览器开发商已经意识到这个问题，并已相继提出了一些解决方案

##### 解决方法

1. fastClcik (最常用的,但是并不推荐,很多 bug)

2. 所有 click 事件都改用 touch 事件 (可以,但是估计大家也不喜欢,之前用过一个 tap.js,大家可以查一下)

3. `<meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1"></meta>` 禁用双击放大,也就不用判断双击放大了,也就没有延时了

4. `<meta name="viewport" content="width=device-width"></meta>` 也是不会双击放大了 (用 rem/vw 为单位的时候基本上肯定会写 方法 3,4,所以其实我们不经意间已经用了这种方法来去掉 click 延迟)3,4 方法大部分情况没问题,听说在某些 ios 机型上有 bug,但目前我还没发现

5. 指针事件 (Pointer Events) css 里设置 touch-action:none (基本不用考虑这个了,1️ 他的原理是先用这个把底层的 click 事件禁用了,然后 300 秒以后再恢复,主要是用来解决点击穿透的)

所以:我认为最好的办法是使用方法 3,4 然后再写代码的时候统一使用 click 事件,不要混用 touch 和 click,这样可以不引用 fastClcik

#### fastClick 的原理

其实就是通过 touch 事件,在 touchend 的时候判断是否是点击,如果是的话就模拟一个点击事件发送过去,并且阻止了浏览器本身 300ms 以后的那个点击事件,这样就相当于点击事件没有 300ms 的延迟了

#### 源码解析

[git 地址](https://github.com/dogsmall/markdown/blob/master/fastclick/fastclick.js)

#### 参考文档

[移动端 Click300 毫秒点击延迟的来龙去脉](https://www.cnblogs.com/dunken/p/4527869.html)</b>

[移动端页面点击穿透问题](https://www.jianshu.com/p/77a3c89760a4)</b>

[FastClick 填坑及源码解析](https://www.cnblogs.com/vajoy/p/5522114.html)</b>

[fastclick 解析与 ios11.3 相关 bug 原因分析](https://segmentfault.com/a/1190000015234652)</b>
