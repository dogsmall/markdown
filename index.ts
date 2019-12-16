// class MinClass<T> {
//   public list: T[] = [];
//   add(value: T): void {
//     this.list.push(value);
//   }
//   min(): T {
//     let min: T = this.list[0];
//     for (let index = 1; index < this.list.length; index++) {
//       const element = this.list[index];
//       if (min > this.list[index]) {
//         min = this.list[index];
//       }
//     }
//     return min;
//   }
// }
// function getData<T>(value:T):T{
//   return value
// }
// getData<string>("value")
// // 函数类型接口
// interface ConfigFn {
//   (value: string, value2: string): string;
// }
// var setData: ConfigFn = function(value: string, value2: string): string {
//   return value + value2;
// };

// // 泛型类型接口

// interface ConfigFn {
//   <T>(value: T): T;
// }
// var setData:ConfigFn = function<T>(value:T):T {
//   return value  
// }

// interface ConfigFn<T> {
//   (value: T): T;
// }
// var setData:ConfigFn<string> = function<T>(value:T):T {
//   return value  
// }