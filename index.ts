class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }
  min(): T {
    let min: T = this.list[0];
    for (let index = 1; index < this.list.length; index++) {
      const element = this.list[index];
      if (min > this.list[index]) {
        min = this.list[index];
      }
    }
    return min;
  }
}
