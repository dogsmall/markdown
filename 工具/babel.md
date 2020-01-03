# babel

### babel 是什么

```
    Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
```

### babel 是作用

### babel 的用法

```JS
    {
        //presets 字段设定转码规则   
        "presets": [
            ["env", { "modules": false }],
            "stage-2" //"stage-0","stage-1","stage-2","stage-3"
        ],
        "plugins": ["transform-vue-jsx"],
        "comments": false,
        "env": {
            "test": {
            "presets": ["env", "stage-2"],
            "plugins": [ "istanbul" ]
            }
        }
    }
```

### babel 的原理
``` JS
    原理就是把ES6或者ES7的语法转化成ES5,打平各大浏览器的兼容性问题
```



# babel-polyfill

### babel-polyfill作用

```JS
    Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

    举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
```