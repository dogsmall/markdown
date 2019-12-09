# 泛型

泛型:可以支持不特定的数据类型 并保证传入的参数和返回的参数一致

```JS
function getData<T>(value:T):T{
    return value
}
```

####泛型类

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