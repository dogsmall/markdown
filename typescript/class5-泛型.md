# 泛型

泛型:可以支持不特定的数据类型 并保证传入的参数和返回的参数一致
我个人理解:别被一些高大上的理论弄晕了, 你就把他当成一个占位符 <T> 相当于给占位符命名,告诉大家以后你的占位符叫T,然后你就可以用T来去定义各种类型,你要是高兴你写<A>,<B>,<C>都行,只要你对应上就行,看一下下面的泛型实际情况

举个🌰
```JS
//<T> 用来命名一个T的占位符,这里T表示我定义了一个类型,至于这个类型是啥你别管,到时候我给<>里传啥就是啥
// T 占位符叫T的就是都是同一个类型
function getData<T>(value:T):T{
    return value
}
// <string> 我传了一个string, 这个getData方法当时定义的T 变成了string 就等于function getData<string>(value:string):string{return value}
getData<string>("123")
getData("123") // 这两个语句是相等的,一个是显示的指定类型,一个会自动判断
```

#### 泛型类

```TS
class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }
  min(): T {
    let min: T = this.list[0];
    for (let index = 1; index < this.list.length; index++) {
      const element = this.list[index];
      if (min > this.list[index]) {
        min = this.list[index];
      }
    }
    return min;
  }
}
```
泛型接口
```TS
// 函数类型接口
interface ConfigFn {
  (value: string, value2: string): string;
}
var setData: ConfigFn = function(value: string, value2: string): string {
  return value + value2;
};

// 泛型类型接口

interface ConfigFn {
  <T>(value: T): T;
}
var setData:ConfigFn = function<T>(value:T):T {
  return value  
}

interface ConfigFn<T> {
  (value: T): T;
}
var setData:ConfigFn<string> = function<T>(value:T):T {
  return value  
}
```

#### 泛型对象
```JS
  class student {
    name:string;
    age:number;
  }
```
