 #### 接口

定义标准

#### 属性类接口

对json的约束

```JavaScript
    interface FullName {
        firstName:string;
        secondName ?:string; // 接口的可选属性
    }
```
```TypeScript
    interface Config {
        type:string;
        url: string;
        data?:string;
        dataType:string;
    }


    function ajax(config:Config) {
        var xhr = new XMLHttpRequest();
        xhr.open(config.type,config.url,true)
        xhr.send(config.data);
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4 && xhr.status ==200){
                console.log('成功')
                
                console.log(xhr.responseText)
            }
        }
    }
```

#### 函数类型接口:对方法传入的参数以及返回值进行约束
``` Typescript
    interface encrypt {
        (key:string,value:string):string
    }
    var md5:encrypt = function(key:string,value:string):string{
        return key+value
    } 
```

#### 可索引接口,数组的约束

```JS
    var arr:number[]=[123,123]
```
```TS
    interface UserArr {
        [index:number]:string
    }
    var arr:UserArr = ['gsw','gsw']
```
#### 可索引接口,对象的约束

```TS
    interface UserObj {
        [index:string]:string
    }
    var arr:UserObj={name:'20}
```
#### 类 类型对象:对类的约束 和抽象类有点相似

```TS
    interface Animal {
        name:string;
        eat(str:string):void;
    }
    class Dog implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name
        }
        eat() {
            console.log(this.name+"吃粮食")
        }
    }
```
#### 接口扩展,接口可以继承接口

```TS
interface Animal{
    eat():void
}
interface Person extends Animal {
    work():void
}
class Web implements Person {
    eat(){
        console.log("吃东西")
    }
    work(){
        console.log("写代码")
    }
}
```