class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkList {
  constructor(val) {
    const node = new Node(val);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  prepend(val) {
    const node = {
      value: val,
      next: null,
    };
    node.next = this.head;

    this.head = node;
    this.length++;
  }

  find(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return currentNode;

      currentNode = currentNode.next;
    }
  }

  findWithKey(key) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value[0] === key) return currentNode;

      currentNode = currentNode.next;
    }
  }

  remove(index) {
    const length = this.length - 1;
    if (index < 0 || index > length) index = length;
    const preNode = this.findNodeBeforeTarget(index);

    if (index === 0) {
      const nextNode = preNode.next;
      this.head = nextNode;
      this.length--;
      return;
    }

    const nextNode = preNode.next.next;
    preNode.next = nextNode;

    this.length--;
  }
}

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // * create the set and get methods

  set(key, val) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = new LinkList([key, val]);
    } else {
      this.data[address].prepend([key, val]);
    }
  }

  get(key) {
    const address = this._hash(key);
    const arrResult = this.data[address];
    const arrLength = arrResult?.length;

    if (!arrLength) return;
    if (arrLength === 1) return arrResult.head.value[1];

    // * in the case collision
    const node = arrResult.findWithKey(key);
    return node.value[1];
    // for (let i = 0; i < arrLength; i++) {
    //   // * this is why if we have collision we have O of n right
    //   if (arrResult[i][0] === key) return arrResult[i][1];
    // }
  }
  // [undefined, [[a, 1]], [[b,2], [c,3]]]
  keys() {
    const resultKeys = [];

    if (!this.data.length) return resultKeys;

    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]?.length) continue;

      if (this.data[i].length === 1) {
        resultKeys.push(this.data[i].head.value[0]);
        continue;
      }

      let currentNode = this.data[i].head;
      while (currentNode !== null) {
        resultKeys.push(currentNode.value[0]);
        currentNode = currentNode.next;
      }
    }
    return resultKeys;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 2000);

console.log(myHashTable.get("grapes"));

myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("apples_1"));
console.log(myHashTable.data);

console.log(myHashTable.keys());
