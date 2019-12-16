interface DBI {
    add():Boolean;
    update():Boolean;
    delete():Boolean;
    get():any
}



class Student {
    name:string|undefined;
    age:number|undefined;
}

interface Ischool<T> {
    add(p:T):void;
    pop():T;
}


namespace A {
    interface Animal {
        name:string;
        eat:void;
    }
}