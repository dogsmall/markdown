// 冒泡算法
function sort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
            
        }
        
    }
    return arr
}

function sort(array) {
    var i = arr.length-1
    while (i>0) {
        var pos = 0
        for (let j = 0; j < i; j++) {
            if (array[j]>array[j+1]) {
                pos = j
                var temp = array[j]
                array[j]= array[j+1]
                array[j+1] = temp
            }
        }
        i = pos
    }
    return array
}

function sort(arr) {
    var  low = 0
    var height  = arr.length-1
    var temp,j;
    while (low<height) {
        for ( j = low; j < height; ++j) {
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        --height
        for ( j = height; j > low; --j) {
            if(arr[j]>arr[j-1]) {
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        ++low
    }
    return arr
}

// 选择排序
function selectSort(arr){
    for(let i = 0,len = arr.length; i < len; i++){
        let k = i;//用于存放当前循环中最小值得index 默认为循环初识值的index
        for(let j = i; j < len; j++){
            if(arr[j] < arr[k]){
                k = j;
            }
        }
        if(k !== i){
            swap(arr,i,k)//将最小值与当前循环的第一个值互换位置
        }
    }
    return arr;
}
// 插入排序



// 快速排序

function quickSort(array) {
    var mid = Math.floor(arr.length/2)
    var midNum = array[mid]
    for (let i = 0; i < array.length; i++) {
        if(array[i]<midNum){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return quickSort(left).concat([midNum],quickSort(right))
}

var quickSort=function(arr,left,right){

    // 如果左边界比右边界大，返回结果，排序结束
    if(left>right){
      return;
    }
  
    // 默认值处理，如果有传入left和right参数，就赋值这个参数，否则就赋值后面的默认值
    left=left||0;
    right=right||arr.length-1;
  
    // 定义移动的左游标和右游标
    var leftPoint=left;
    var rightPoint=right;
  
    // 定义一个基准数
    var temp=arr[left];
  
    // 判断左右游标是否重合，如果重合，循环结束
    while(leftPoint!=rightPoint){
  
      // 基准数在左边，因此从右边开始一个个扫描
      // 从右到左，寻找小于基准数的数，且左游标要小于右游标
      // 如果数字大于基准数（证明不符合条件），寻找下一个
      // 直到找到比基准数小的数，游标停止递减
      while(arr[rightPoint]>=temp&&leftPoint<rightPoint){
        rightPoint--;
      }
      // 从左到右，寻找大于基准数的数，且左游标要小于右游标
      // 如果数字小于基准数（证明不符合条件），寻找下一个
      // 直到找到比基准数小的数，游标停止递增
      while(arr[leftPoint]<=temp&&leftPoint<rightPoint){
        leftPoint++;
      }
  
      // 如果左游标小于右游标，则交换两个数字的位置
      if(leftPoint<rightPoint){
        var changeNumber=arr[leftPoint];
        arr[leftPoint]=arr[rightPoint];
        arr[rightPoint]=changeNumber;
      }
      // 进行下一次循环，直到两个游标重合位置
    }
  
    // 重合之后，交换基准数
    arr[left]=arr[leftPoint];
    arr[leftPoint]=temp;
  
    // 递归操作左右两个数组
    quickSort(arr,left,leftPoint-1);
    quickSort(arr,leftPoint+1,right);
  
    return arr;
  };


// 希尔排序


// 归并排序

// 堆排序


// 计数排序

// 桶排序

// 基数排序