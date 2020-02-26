// // 快排
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   let mid = Math.floor(arr.length / 2)
//   var pivot = arr.splice(mid, 1)[0];
//   let right = []
//   let left = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right))
// }

// function quickSort(arr, left, right) {
//   if (left < right) {
//     return
//   }
//   left = left || 0;
//   right = right || arr.length - 1;
//   // 定义移动的左游标和右游标
//   var leftPoint = left;
//   var rightPoint = right;

//   var temp = arr[left];
//   // 判断左右游标是否重合，如果重合，循环结束
//   while (leftPoint != rightPoint) {

//     // 基准数在左边，因此从右边开始一个个扫描
//     // 从右到左，寻找小于基准数的数，且左游标要小于右游标
//     // 如果数字大于基准数（证明不符合条件），寻找下一个
//     // 直到找到比基准数小的数，游标停止递减
//     while (arr[rightPoint] >= temp && leftPoint < rightPoint) {
//       rightPoint--;
//     }
//     // 从左到右，寻找大于基准数的数，且左游标要小于右游标
//     // 如果数字小于基准数（证明不符合条件），寻找下一个
//     // 直到找到比基准数小的数，游标停止递增
//     while (arr[leftPoint] <= temp && leftPoint < rightPoint) {
//       leftPoint++;
//     }

//     // 如果左游标小于右游标，则交换两个数字的位置
//     if (leftPoint < rightPoint) {
//       var changeNumber = arr[leftPoint];
//       arr[leftPoint] = arr[rightPoint];
//       arr[rightPoint] = changeNumber;
//     }
//     // 进行下一次循环，直到两个游标重合位置
//   }

//   // 重合之后，交换基准数
//   arr[left] = arr[leftPoint];
//   arr[leftPoint] = temp;

//   // 递归操作左右两个数组
//   quickSort(arr, left, leftPoint - 1);
//   quickSort(arr, leftPoint + 1, right);

//   return arr;
// }

let arr = [1, 2, 22222, 2, 2, 2]
console.log(quickSort(arr))