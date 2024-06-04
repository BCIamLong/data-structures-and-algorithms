class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = {
      value: val,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(val) {
    // * so we can do it like this
    // const node = {
    //   value: val,
    //   next: this.head,
    // };

    // * but why we need to do it like this so we set the next pointer to null and then after that we move to the pointer to our head? so it's better?
    // * basically usually we will use OOP to implement this linked list with class like we have class Node and first we need to instantiate new node right with the value and the next pointer null
    // * and then we can use node.next = this.head so something like that
    // * so why we need to generate with pointer null? that because not all the time we always have the pointer in the first time we create new node right? so it's flexibility
    // * and linked is incremental so it's sequential right it's not like we have all the value at the time so we generate new node and link and connect them right
    // const nodeInstance = new Node(val);
    // nodeInstance.next = this.head;
    // * so like this

    const node = {
      value: val,
      next: null,
    };
    node.next = this.head;

    // this.head.next = node;
    // this.head = node;
    this.head = node;
    // this.head = nodeInstance;

    this.length++;
  }

  append(val) {
    // this.node = {
    //   value: val,
    //   next: null,
    // };

    // this.head.next = this.node;
    // const nodeInstance = new Node(val);
    // nodeInstance.next = this.head;
    const node = {
      value: val,
      next: null,
    };
    // this.head = { ...this.head, next: node };
    // this.head.next = node;

    this.tail.next = node;
    this.tail = node;
    // this.tail.next = nodeInstance;
    // this.tail = nodeInstance;

    this.length++;
  }

  remove(index) {
    const length = this.length - 1;
    if (index < 0 || index > length) index = length;

    const preNode = this.findNodeBeforeTarget(index);
    // console.log("ok------------", preNode);
    // if (index === length) {

    // }
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

  insert(index, val) {
    // if (index > this.length - 1) return console.log("! Invalid index");

    if (index === 0) return this.prepend(val);

    if (index >= this.length - 1 || index < 0) return this.append(val);

    let node = {
      value: val,
      next: null,
    };

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        // * manipulate with pointer next to do this task it work
        node.next = currentNode.next;
        currentNode.next = node;

        // ? if we manipulate with the entire node like this then it doesn't work
        // node.next = currentNode;
        // currentNode = node;

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

  reverse() {
    if (this.length <= 1) return;

    const nodesArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      nodesArr.push(currentNode);
      currentNode = currentNode.next;
    }

    const length = this.length - 1;

    for (let i = length; i >= 0; i--) {
      if (i === length) {
        this.head = nodesArr[i];
        this.head.next = nodesArr[i - 1];
        continue;
      }
      if (i === 0) {
        this.tail = nodesArr[i];
        this.tail.next = null;
        continue;
      }
      nodesArr[i].next = nodesArr[i - 1];
    }
  }

  reverseV2() {
    // * so basically we use two variable to do this reverse so first and second to do the traverse
    // * because with singly linked list we can't traverse backwards right
    let first = this.head;
    this.tail = this.head; // tail to head because after that we reverse and the head now will be the tail right
    let second = first.next;
    while (second) {
      const tmp = second.next; // create tmp to reassign for the second, because we don't want to change this second.next then assign it right we want it before it change

      second.next = first; // point the link of the second to the first
      // * so the idea is traversal and then point the reference of the next node to the before node continue until end and then change the head and the tail like swapped
      // * then we have the reverse linked list so we just reverse the pointer of each nodes right then we have the linked list with the opposite direction so that reserve for linked list

      // 1 2 3 4
      // reassign first and second to do the next loop
      // * so like: 1 2 3 4
      // * turn 1: 1 <- 2, first = 1, second = 2
      // * turn 2: 2 <- 3, first = 2, second = 3
      // * turn 3: 3 <- 4, first = 3, second = 4
      // * end
      first = second;
      second = tmp;
    }

    this.head.next = null; // * we change the head to null and remember now the tail is also point to this memory then this.tail right now is point next to null
    // * and then we can assign the head with the first which is the last element which is now the head of the linked list

    this.head = first; // * first right now is the second so the last element so 4 and because second is first.next then it's null then the while loop end
  }

  print() {
    let next = this.head;
    const arr = [];
    while (next !== null) {
      arr.push(next);
      next = next?.next;
    }
    // for (let i = 0; i < this.length; i++) {
    //   arr.push(next);
    //   next = next?.next;
    // }
    console.log(arr);
  }
}

// * init with 10 value head = tail = {value: 10, next: null}
const list = new LinkedList(10);
// * add 5 move this.tail.next = node => this.head.next = node (remember head and tail right are point to the {value: 10, next: null}) memory
// * => head = {value: 10, next: {value: 5, next: null}}
// * this.tail = node; => tail now is point to {value: 5, next: null} memory the same with head.next right
list.append(5);
// * add 2 move this.tail.next = node => {value: 5, next: null} => {value: 5, next: {value: 2, next: null}}
// * and because head.next is point to this {value: 5, next: null} then when we change it's also change so therefore now head will be {value: 10, next: {value: 5, next: {value: 2, next: null}}}
// * this.tail = node; move tail to the {value: 2, next: null} memory
list.append(2);
// * add 16, the way it works like the way above
list.append(16);
// ! so linked list works with pointer and as we can see it's based pointer technique, point to memory and change the memory and all thing is used this pointer will also change

console.log(list);
// console.log(list.head.next);

list.prepend(20);
list.prepend(30);

// console.log(list);
list.print();
console.log("---------------------------------------------------------");

list.insert(1, 99);

list.insert(4, 99);
list.insert(100, 99);

list.print();

console.log(list.find(2));

console.log(
  "---------------------------------------------------------------------------------"
);
list.remove(3);
list.remove(7);
list.remove(0);
list.remove(100);
list.remove(-100);

list.print();

console.log(
  "---------------------------------------------------------------------------------"
);

// list.reverse();
list.reverseV2();
list.print();
