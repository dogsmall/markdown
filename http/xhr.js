var xhr = new XMLHttpRequest()

xhr.open('get',url,false)
xhr.setRequestHeader("Content-Type","application")
xhr.onreadystatechange = function () {
    // readyState
    /**
     * 0(未初始化) 还没有send
     * 1 (载入)
     * 2 (载入完成)
     * 3 (交互)
     */
    if(xhr.readyState === 4){
        if(xhr.status ===200){
            alert(xhr.responseText);
        }
    }
}
xhr.send()