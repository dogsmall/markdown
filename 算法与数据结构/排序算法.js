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

function quickSort(array,left, right) {
    if(left<right){
        var x = array[right],i = left-1,temp
        for (let j = left; j <= right; j++) { 
            if(array[j]<=x) {
                i++
                temp =array[i];
                array[i] = array[j]
                array[j] = temp
            }
        }
        quickSort(array,left,i-1)
        quickSort(array,i+1,right)
    }
    return array
}


// 希尔排序


// 归并排序

// 堆排序


// 计数排序

// 桶排序

// 基数排序