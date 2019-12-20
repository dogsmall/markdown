#### TODO

### 1. 类的定义
```TS
class ClassName {
    constructor(){}
}
```

### 2. 类的实现
```TS
class Person {
    name:string
    constructor(name:string) {
        this.name  = name
    }
}
const person = new Person('gsw');
```
### 3. 类的继承
```TS
class Person {
    name:string
    constructor(name:string) {
        this.name  = name
    }
    say(){
        console.log(this.name)
    }
}
class Worker extends Person {
    age:Number
    constructor(name,age){
        super(name)
        this.age = age
    }
    say() {
        super.say(this.name)
        console.log(this.age)
    }
}
const person = new Person('gsw',18);
```
### 4. 关键字
```TS
class Greeters {
    public name:string
    private age:number
    protected birthday:string
    constructor(name:string) {
        this.name  = name
    }
}
```
### 5. 实例方法/静态方法/静态属性
### 6. 多态
### 7. 抽象类
```TS
// abstract abstract abstract
abstract class ClassName {
    constructor() {}
}
```
### 8. 存取器