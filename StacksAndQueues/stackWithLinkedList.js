class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(val) {
    const item = new Node(val);
    if (!this.top && !this.bottom) {
      this.top = item;
      this.bottom = this.top;
      this.length++;
      return;
    }

    // const oldBottom = this.bottom;
    item.next = this.top;
    this.top = item;
    // this.bottom = this.top;

    this.length++;
  }

  pop() {
    if (!this.length) return;

    this.top = this.top.next;

    if (this.length === 1) this.bottom = this.top;
    // let currentNode = this.top;
    // for (let i = 0; i < this.length; i++) {
    //   if (i === this.length - 2) {
    //     currentNode.next = null;
    //     this.bottom = currentNode;
    //     break;
    //   }
    //   currentNode = currentNode.next;
    // }
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
myStack.pop();
// myStack.pop();
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());
