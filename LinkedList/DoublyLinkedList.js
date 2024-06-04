class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = {
      value: val,
      next: null,
      pre: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(val) {
    const node = {
      value: val,
      next: null,
      pre: null,
    };

    node.next = this.head;
    this.head.pre = node;

    this.head = node;

    this.length++;
  }

  append(val) {
    const node = {
      value: val,
      next: null,
      pre: null,
    };

    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;

    // this.tail.next = node;
    // const preNode = this.tail;
    // this.tail = node;
    // this.tail.pre = preNode;

    this.length++;
  }

  remove(index) {
    const length = this.length - 1;
    if (index < 0 || index > length) index = length;

    const preNode = this.findNodeBeforeTarget(index);

    if (index === 0) {
      const nextNode = preNode.next;
      nextNode.pre = null;
      this.head = nextNode;
      this.length--;
      return;
    }

    if (index === length) {
      preNode.next = null;
      this.tail = preNode;
      this.length--;
      return;
    }

    const nextNode = preNode.next.next;
    preNode.next = nextNode;
    nextNode.pre = preNode;

    this.length--;
  }

  insert(index, val) {
    if (index === 0) return this.prepend(val);

    if (index >= this.length - 1 || index < 0) return this.append(val);

    let node = {
      value: val,
      next: null,
      pre: null,
    };

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        // let nextNode = currentNode.next;
        node.next = currentNode.next;
        currentNode.next = node;
        node.pre = currentNode;
        node.next.pre = node;

        break;
      }
      currentNode = currentNode.next;
    }
    this.length++;
  }

  findNodeBeforeTarget(index) {
    if (index === 0) return this.head;

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) return currentNode;

      currentNode = currentNode.next;
    }
  }

  find(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return currentNode;

      currentNode = currentNode.next;
    }
  }

  print() {
    let next = this.head;
    const arr = [];
    while (next !== null) {
      arr.push(next);
      next = next?.next;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkedList(10);

list.append(5);
list.append(2);
list.append(16);

// console.log(list);

list.prepend(20);
list.prepend(30);

// console.log(list);

list.print();
// list.print();
console.log("---------------------------------------------------------");

list.insert(1, 99);

list.insert(4, 99);
list.insert(100, 99);

list.print();

// console.log(list.find(2));

console.log(
  "---------------------------------------------------------------------------------"
);
list.remove(0);
list.remove(2);
list.remove(7);
list.remove(100);
list.remove(-100);

list.print();
