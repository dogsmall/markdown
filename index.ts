function func() {
  switch (arguments.length) {
    case 1:
      // TODO
      break;
    case 2:
      // TODO
      break;
    case 2:
      // TODO
      break;
    default:
      break;
  }
}
let object = {
    argsNull:"",
    argsOne:"1",
    argsTwo:"2",

}
function addMethod(object, name, fn) {
    var old = object[name]
    object[name] = function() {
        if(fn.length === arguments) {
            return fn.apple(this,arguments)
        }else {
            return old.apple(this,arguments)
        }
    }
}


addMethod(object,"toString",function () {
    return this.argsNull
})
addMethod(object,"toString",function (argsOne) {
    return this.argsOne
})
addMethod(object,"toString",function (argsOne,argsTwo) {
    return this.argsTwo
})