class EventEmeiterr {
    constructor(){
        this._events = this._events || new Map()
    }
    addlister(type,fn) {
        if(!this._events.get(type)) {
            this._events.set(type,fn)
        }
    }
    emit(type,...args) {
        let hander;
        hander = this._events.get(type)
        handler.apply(this, args);
        return true;
    }
}