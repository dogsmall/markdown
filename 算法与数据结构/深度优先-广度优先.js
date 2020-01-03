let deepTraversal1 = (node,nodelist=[]) =>{
    if(node!==null) {
        nodelist.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            deepTraversal1(children[i],nodelist)
        }
    }
    return nodelist
}

let deepTraversal2 = (node)=>{
    let nodes = []
    if(node !==null) {
        node.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}

let deepTraversal3=(node)=>{
    let stack = []
    let nodes = []
    if(node) {
        stack.push(node)
        while (stack.length) {
            let item = stack.pop()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
}



let widthTraversal2 = (node) =>{
    let nodes = []
    let queue = []
    if(node) {
        queue.push(node)
        while (queue.length) {
            let item = queue.pop()
            let children = item.children
            nodes.push(item)
            for (let i = 0; i < children.length; i++) {
                queue.push(children[i])
            }
        }
    }
    return nodes
}