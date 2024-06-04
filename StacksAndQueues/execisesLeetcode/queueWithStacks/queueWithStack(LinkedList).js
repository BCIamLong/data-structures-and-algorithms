var MyQueue = function () {
  //  this.array = []
  this.bottom = null;
  this.top = null;
  this.length = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  //    this.array.push(x)
  const newNode = {
    value: x,
    next: null,
  };
  if (!this.length) {
    this.top = newNode;
    this.bottom = newNode;
    this.length++;
    return;
  }
  this.top.next = newNode;
  this.top = newNode;
  this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  //   const holdingItem = this.array[0]
  //   this.array.reverse().pop()
  //   this.array.reverse()
  //   this.array.splice(0, 1)
  //   return holdingItem
  if (!this.length) return null;
  const holdingPointer = this.bottom;
  this.bottom = this.bottom.next;
  if (this.length === 1) this.top = null;
  this.length--;

  return holdingPointer.value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  //   return this.array[0]
  return this.bottom.value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  //  return this.array.length === 0
  return this.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
