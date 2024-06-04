class MyArray {
  constructor(...vals) {
    this.length = 0;
    if (vals.length) {
      this.data = {};
      for (let i = 0; i < vals.length; i++) {
        this.data[i] = vals[i];
        this.length++;
      }
      return;
    }
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  // typically in method of js they usually return the length of the arr
  push(val) {
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }

  pop() {
    // * store here
    const lastItem = this.data[this.length - 1];
    // and then delete to take this value for return value of this pop method
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    if (!item) return null;
    delete this.data[index];
    this.length--;

    // * follow the good practice we should give the function just responsible for one single work
    //* reset the indexes, therefore this reset task here we can extract it to another method
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    // for (let i = 0; i < this.length; i++) {
    //   if (i >= index) this.data[i] = this.data[i + 1];
    //   else this.data[i] = this.data[i];
    // }
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];
  }
}

const arr = new MyArray(4, 5, 6);
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.get(0));
arr.pop();
arr.pop();
arr.delete(0);
arr.push(1);
arr.push(2);
arr.push(3);
arr.delete(3);
console.log(arr);
