### this
1. this 永远指向最后调用它的那个对象
1. 箭头函数的 this 始终指向函数定义时的 this，而非执行时


```JS
    var name = "windowsName";
    function a() {
        var name = "Cherry";

        console.log(this.name);          // windowsName

        console.log("inner:" + this);    // inner: Window
    }
    a();
    console.log("outer:" + this)         // outer: Window

```

```JS    
    var name = "windowsName";
    var a = {
        name: "Cherry",
        fn : function () {
            console.log(this.name);      // Cherry
        }
    }
    a.fn();
```

```JS
    var name = "windowsName";
    var a = {
        name: "Cherry",
        fn : function () {
            console.log(this.name);      // Cherry
        }
    }
    window.a.fn();
```
### apply

```JS
fun.apply(thisArg, [argsArray])

```
### call

```JS
fun.call(thisArg[, arg1[, arg2[, ...]]])
```
### bind  
```JS
if (typeof Function.prototype.bind === "undefined"){
  Function.prototype.bind = function (thisArgs){
    // 闭包
    var fn = this,
        slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function (){
      return fn.apply(thisArgs, args.concat(slice.call(arguments)));
    }
  }
}
```