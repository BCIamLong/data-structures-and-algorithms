class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(val) {
    const newItem = new Node(val);

    if (!this.length) {
      this.first = newItem;
      this.last = newItem;
      this.length++;
      return;
    }

    this.last.next = newItem;
    this.last = newItem;
    this.length++;
  }

  dequeue() {
    // * if we want to keep the node we just deleted to do something like for the requirements needed
    // * we can do
    // const holdingPointer = this.first;

    // * so like this and we can return it to do something after it's deleted
    // ! and notes we need to notice:
    // * because JS is auto memory management so when we delete the node here it's still on our memory although it doesn't have any reference
    // * but with JS it will automatically delete the node or data if we don't use or don't have any reference to this data
    // * in the low language like C we need to write code manually to delete the pointer or the data because with C it's manually memory management
    this.first = this.first.next;
    if (this.length === 1) this.last = null;
    this.length--;
    // return holdingPointer;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Jota");
myQueue.enqueue("Haru");
myQueue.enqueue("San");

myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue);
console.log(myQueue.peek());
