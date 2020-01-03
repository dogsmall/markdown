// 防抖

function debounce() {
    let timeout  = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            fn.apply(this,arguments)
        },500)
    }
}


function throttle() {
    let canRun = true
    return function () {
        if(!canRun) return
        canRun = false
        setTimeout(()=>{
            fn.apply(this,arguments)
            canRun = true
        },500)
    }
}