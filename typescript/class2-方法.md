#### TODO

### 1. 方法
```TS
function add(x: number, y: number): number {
  return x + y;
}

let myAdd: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y;
};
```
### 2. 形参/实参
略
### 3. 重载
重载是指函数或者方法有相同的名称，但是参数个数或类型不相同的情形，这样的同名不同参的函数或者方法之间，互相称之为重载函数或方法。
备注:如果有人问你JS有没有重载,回答有或者没有都可以,JS没有java那种明确的重载机制,但是JS确实可以实现重载功能(通过arguments)
```JS
<!-- 通过switch实现 -->
function func() {
  switch (arguments.length) {
    case 1:
      // TODO
      break;
    case 2:
      // TODO
      break;
    case 2:
      // TODO
      break;
    default:
      break;
  }
}
<!-- 之前我一直认为就上面一种方法,后来我上网查的时候又发现了一种通过闭包来实现的 听说是在<<JavaScript忍者秘籍>>里面写的 -->
let object = {
    argsNull:"",
    argsOne:"1",
    argsTwo:"2",

}
function addMethod(object, name, fn) {
    var old = object[name]
    object[name] = function() {
        if(fn.length === arguments) { //fn.length表示方法的必出形参数,arguments表示实参个数 这句话的意思就是调用形参和实参个数相同的方法
            return fn.apple(this,arguments)
        }else {
            return old.apple(this,arguments)
        }
    }
}


addMethod(object,"toString",function () {
    return this.argsNull
})
addMethod(object,"toString",function (argsOne) {
    return this.argsOne
})
addMethod(object,"toString",function (argsOne,argsTwo) {
    return this.argsTwo
})
```
### 4. new 的实现
```JS
function Father(name,age) {
    this.name = name;
    this.age = age;
}
function New(Father,...args) {
    let Son = Object.create(Farther.prototype)
    Father.apply(Son,args)
    return Son
}
New(Father,"gsw",18)
function New(f) {
    //返回一个func
    return function () {
        var o = Object.create(Farther.prototype);
        f.apply(o, arguments);//继承父类的属性
        return o; //返回一个Object
    }
}
New(Father)("gsw","18")
```

### 5. bind实现
