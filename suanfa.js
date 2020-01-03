// function bsearch(array, low, height, target) {
//   if (low > height) return -1;
//   var mid = Math.floor((low + height) / 2);
//   if (array[mid] > target) {
//     return dsearch(array, low, mid, target);
//   } else if (array[mid] < target) {
//     return dsearch(array, mid, height, target);
//   } else {
//     return mid;
//   }
// }

// function bsearch(array, low, height, target) {
//   while (low <= height) {
//     var mid = Math.floor((low + height) / 2);
//     if (array[mid] > target) {
//       height = mid - 1;
//     } else if (array[mid] < target) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1
// }

// 冒泡排序
// function bubbleSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //相邻元素两两对比
//         var temp = arr[j + 1]; //元素交换
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function bubbleSort2(arr) {
//   console.time("改进后冒泡排序耗时");
//   var i = arr.length - 1; //初始时,最后位置保持不变
//   while (i > 0) {
//     var pos = 0; //每趟开始时,无记录交换
//     for (var j = 0; j < i; j++)
//       if (arr[j] > arr[j + 1]) {
//         pos = j; //记录交换的位置
//         var tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     console.log(pos);
//     i = pos; //为下一趟排序作准备
//   }
//   console.timeEnd("改进后冒泡排序耗时");
//   return arr;
// }
// function bubbleSort3(arr3) {
//   var low = 0;
//   var high = arr.length - 1; //设置变量的初始值
//   var tmp, j;
//   console.time("2.改进后冒泡排序耗时");
//   while (low < high) {
//     for (
//       j = low;
//       j < high;
//       ++j //正向冒泡,找到最大者
//     )
//       if (arr[j] > arr[j + 1]) {
//         tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     --high; //修改high值, 前移一位
//     for (
//       j = high;
//       j > low;
//       --j //反向冒泡,找到最小者
//     )
//       if (arr[j] < arr[j - 1]) {
//         tmp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = tmp;
//       }
//     ++low
//   }
//   return arr3;
// }

// 选择排序

// function selectSort(arr) {
//   let len = arr.length
//   let temp
//   let minIndex
//   for (let i = 0; i<len-1; i++) {
//      minIndex = i
//      for (let j = i+1; j < len; j++) {
//        if(arr[j]<arr[minIndex]){
//         minIndex = j
//        }
//      }
//      temp = arr[i]
//      arr[i] = arr[minIndex]
//      arr[minIndex] = temp
//   }
//   return arr
// }

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    var key = array[i]
    var j = i-1
    while (j>=0&&array[j]>key) {
      array[j+1] = array[j]
      j--
    }
    array[j + 1] = key;
  }
  return array
}


function InsertSort(array) {
  for (let i = 0; i < array.length; i++) {
    var key = array[i],left = 0,right = i-1
    while (left<=right) {
      var middle = parseInt((left + right) / 2);
      if(key<array[middle]){
        right = middle-1
      }else {
        left = middle+1
      }
    }
    for (let j = i-1; j >=left; j--) {
      array[j+1] = array[j]
    }
    array[left] = key
  }
  return array
}




var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertSort(arr));
