# rem 和 vw

## rem

先说一下px 和 em

```
px: 相对长度单位. 像素 px 是相对于显示器屏幕分辨率而言的
```

```
em: 相对长度单位 相对于当前对象内的文本字体尺寸.如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
任意浏览器的默认字体高都是 16px。所有未经调整的浏览器都符合: 1em=16px。那么 12px=0.75em,10px=0.625em。为了简化 font-size 的换算，需要在 css 中的 body 选择器中声明 Font-size=62.5%，这就使 em 值变为 16px\*62.5%=10px, 这样 12px=1.2em, 10px=1em, 也就是说只需要将你的原来的 px 数值除以 10，然后换上 em 作为单位就行了。

```
**问题: 如果父元素设置了 1.2em ,子元素的设计稿如果是 12px 那应该设多少 em**
```html
<body class="font-size=62.5%"> // 这里的1em = 10px
   <div class="font-size:1em"> // 这里的1em = 10px
        <div class="font-size:1.2em;width=1em;height=12px">width是 12px</div> // 这里的font-size中的1em=10px 其实就是当前对象继承父级的font-size 10px 但是width =1em 里面的1em 已经是12px了
   </div>
</body>
```
**结论:em 是自身font-size的大小,如果没有设置自己的就是继承父级字体的大小 1em = 当前font-size的大小 所以em是父级的字体大小这句话是错的,em永远只是当前对象的字体大小**



```
像素密度ppi: 每英寸包括的像素数。

DPI: 即每英寸包括的点数。

设备独立像素:物理尺寸(css像素) 以苹果6为例:设备独立像素 375×667

物理像素:分辨率 以苹果6为例:设备独立像素 750×1334

DPR: 设备像素比device pixel ratio简称dpr，即物理像素和设备独立像素的比值。
```

#### 手淘rem解决方案
```javascript
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="./node_modules/amfe-flexible/index.js"></script>
```
```javascript
    // lib-flexible.js 源码
    (function flexible (window, document) {
  var docEl = document.documentElement // 获取到了html
  var dpr = window.devicePixelRatio || 1 获取到了dpr

  // adjust body font size
  function setBodyFontSize () {
  // 这不是用来设置body字体大小,不要跟随html的字体大小
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();
  // 这里就是设置rem 的关键 原理上应该是docEl.clientWidth / 100 但有个问题,/100会导致rem特别小,1rem小于浏览器最先允许的12px,所以除以10
  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10  
    docEl.style.fontSize = rem + 'px' // 这个时候html就变成了 <html style="font-size=xxxpx" 如果是375的话就是37.5 750的话就是75px
  }

  setRemUnit()
  // 屏幕大小发生变化的时候重新计算rem
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
  // 判断能否处理0.5px 安卓不好使
  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```
当我们引入js以后,js会动态为我们设置html的font-size即rem的基准值,这个时候我们只需要根据设计稿来计算rem的大小就行(由源码可得,1rem = width/10),逻辑就是选中模块的px大小/1rem的px

***举个*** 🌰
设计稿为750的时候 一个宽度为100px 高度为100px 的div 写到代码里面是 width:1.333rem;height:1.333rem 公式为100/(750/10)
设计稿为375的时候 一个宽度为100px 高度为100px 的div 写到代码里面是 width:2.666rem;height:2.66rem 公式为100/(375/10)
#### 剩下两种rem解决方案
刚才说的是阿里手淘的rem的解决逻辑,其实常规的还有两种:
1. 网易rem解决方案
2. 百分比解决方案

先说网易的:
不管是网易还是百分比解决方案,他们的原理都是一致的,都是先确定基准值,网易是先确定了基准值为100px(因为网易内部设计稿统一使用750的标准),那就得到了一个公式及  750px/100 = 7.5rem 也就是所所有机型的宽现在都假定为7.5rem了,那不同机型的rem基准值怎么算还有问题吗? 机型width/7.5 = 1rem (一句话,网易的rem解决逻辑就是不同机型的宽都是7.5rem,剩下的你自己算1rem是多少就行)
```JavaScript
document.documentElement.style.fontSize = window.innerWidth / 7.5 + 'px';
```

百分比的解决方案:
我看公司的代码里面用的就是百分比,原理其实就是用媒体查询,设置不同机型的font-size,html默认是16px,750的机型font-size设置成100px 及 font-size=625% 剩下的按比例改就行

#### 插件
但是每次都需要计算rem太麻烦了, 所以webpack有专门的px to rem 插件``postcss-pxtorem``
如果是用的阿里手淘的那一套,配置为:
```JavaScript
    postcss-pxtorem: { // 此处为添加部分
      rootValue: 75, // 这里根据设计稿来,设计稿是750就75,375就37.5 多人合作一定要统一
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
```
有了这个插件以后我们可以直接用设计稿的px宽度 设计稿显示多少px就是写多少px webpack会帮助我们计算成rem
```
用了pxtorem插件以后会自动把所有px转为rem,如果px不想转rem,可以把px写成Px,例如font-size:16Px 大写P
```
到了这rem怎么用应该就明白了,但其实所有的rem 都是vw的的过渡运用,只不过是加了一个中间过程,原理其实都是vw的那一套,那接下来说说vw
### vw(强烈推荐)
lib-flexible的readme里面写到:
>由于viewport单位得到众多浏览器的兼容，lib-flexible这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用viewport来替代此方案。vw的兼容方案可以参阅《如何在Vue项目中使用vw实现移动端适配》一文。

* vw = view width
* vh = view height

1vw = 视口宽度的1%
所以vw不需要使用不依赖任何font-size,只跟手机视口宽度有关,逻辑上就简单明了很多

所以我只需要计算 设计稿选择部分大小/设计稿的总宽度 = 代码里的vw

***举个*** 🌰
在750设计稿里面 一个宽度100px 高度100px的div 在代码中是100 / 750 * 100vw 即13.33vw
#### vue中vw的配置
跟rem一样,webpack也有vw的插件,可以帮助我们计算vw,这样我们就可以直接写px让webpack帮助我们转换vw
```html
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no,width=device-width">
```
```
cnpm install -D postcss-import postcss-url cssnano-preset-advanced 
cnpm install -S postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext cssnano postcss-viewport-units
```
```javascript
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: ‘vw‘,     // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: [‘.ignore‘, ‘.hairlines‘],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false       // 允许在媒体查询中转换`px`
      }, 
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
```

