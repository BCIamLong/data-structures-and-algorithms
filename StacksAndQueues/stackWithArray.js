class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  peek() {
    return this.array[this.length - 1];
  }

  push(val) {
    // const item = new Node(val);
    this.array.push(val);
    this.length++;
  }

  pop() {
    if (!this.length) return;
    this.array.pop();
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("facebook");
myStack.push("youtube");

myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());
