// *--------------------------------------- 232. Implement Queue using Stacks ---------------------------------

// * implement Queue with Stack(array)
var MyQueue = function () {
  this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.array.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const holdingItem = this.array[0];
  this.array.reverse().pop();
  this.array.reverse();
  return holdingItem;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.array[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.array.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// * implement Queue with Stack(linked list)
