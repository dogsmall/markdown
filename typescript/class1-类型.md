#### TODO
申明下几个概念:
强类型/弱类型 : x 可以一会是字符串，一会是浮点，这是动态。只能是字符串或者number是静态
静态类型/动态类型 : 3/"1.5" 这个数字除字符串合法是弱类型（场合时自动帮你转类型）

JS 是一个动态,弱类型语言
TS 是一个静态,弱类型语言 (这句话也不一定对,,其实TS和JS的类型应该是一致的,只是TS提前进行了类型检查,所以,TS本质上还是JS)
不管是JS或者TS 都是弱类型语言,因为他们都有隐式类型转化
### 1. 类型

1. boolean: false / true
2. number: 0 Ox
3. string: '' / ``模板语言
4. 数组: number[] / Array<number>
5. 元组: [number,string] // 长度和类型顺序是严格的,越界元素是联合类型(3.1以后不能使用)
6. 枚举: enum Color{ red, green, yellow }
7. any: 任意类型
8. void: 没有返回 没有任何类型
9. null: null // 任何类型的子类型
10. undefined: undefined
11. never: 永远不存在 任何类型的子类型
12. object: 对象


JS的Undefined、 Null、 String、 Number、 Boolean、 Symbol
### 2. 类型转换
### 3. 显式类型转换/隐式类型转化
1. 将值转为原始值，ToPrimitive()。
2. 将值转为数字，ToNumber()。
3. 将值转为字符串，ToString()。

### 4. 面试题

### var let const
1. var : 变量提升
2. let : 在一个块内不能重复声明,块级作用域保存,暂时性死区 (当程序的控制流程在新的作用域（module function 或 block 作用域）进行实例化时，在此作用域中用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。)
3. const 不能重新赋值,但是如果是对象可以修改对象的属性

### 解构

```TS
    let [a,b] = [1,2]
    let [a,...b] = [1,2,3,4]
    let [,a,,b] = [1,2,3,4]
    let {c,d} = {c:1,d:2}
    let {c:a,d:b} = {c:1,d:2}
```

### 扩展

```TS
    let first = [1,2]
    let second = [3,4]
    let all = [...first,...second,5,6]

    let search = {...defaults,food:'food'}
```