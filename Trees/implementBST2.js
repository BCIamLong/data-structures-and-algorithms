class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // (1) handle if root is null then we add the root node
    // (2)if root is not null, check the val < or > the root then add it to right or left
    // (3) if we move to the right or the left but we have the node already exist we need to repeat (2), if we don't have any node here then just add it in here
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.value) return;

      if (val < currentNode.value) {
        if (!currentNode.left) return (currentNode.left = newNode);

        currentNode = currentNode.left;
      }

      if (val > currentNode.value) {
        if (!currentNode.right) return (currentNode.right = newNode);

        currentNode = currentNode.right;
      }
    }
  }

  lookup(val) {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === val) return currentNode;

      if (val > currentNode.value) currentNode = currentNode.right;
      else currentNode = currentNode.left;

      if (!currentNode) return null;
    }
  }

  remove(val) {
    // * 1, traversal
    // * 2, find the node
    // * 3, check the node have children or not?
    // * 4, if it's not then just delete (simple)

    // * 5 if it has we need to go to the right node and if this right node has the children then go to its left and take the node and replace the pointers of the node just deleted to it

    // * 6 if we don't have right node but we have left node, then just delete the node and move the pointers of the node is just deleted to the left node
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode) {
      // if (currentNode.value === val) {
      //   const hasChildren = currentNode.left || currentNode.right;
      //   if (!hasChildren) {
      //     currentNode = null;
      //     return;
      //   }
      // }

      if (val > currentNode?.value) {
        const nextNode = currentNode.right;
        if (nextNode.value !== val) return (currentNode = currentNode.right);

        const hasLeftChild = nextNode.left;
        const hasRightChild = nextNode.right;
        const hasChildren = hasLeftChild || hasRightChild;
        if (!hasChildren) return (currentNode.right = null);

        if (hasLeftChild && !hasRightChild)
          return (currentNode.right = nextNode.left);

        let nextLeftChild = nextNode.right?.left;
        const nextRightChild = nextNode.right?.right;
        if (!nextLeftChild && nextRightChild) {
          nextNode.right.left = currentNode.right.left;
          currentNode.right = nextNode.right;
          return;
        }
        if (!nextLeftChild && !nextRightChild) {
          nextNode.right.left = currentNode.right.left;
          currentNode.right = nextNode.right;
          return;
        }

        let previousLeftChild = nextNode.right;
        while (nextLeftChild) {
          if (!nextLeftChild.left) {
            // nextNode.right.left = null;
            previousLeftChild.left = null;
            nextLeftChild.left = currentNode.right.left;
            nextLeftChild.right = currentNode.right.right;
            currentNode.right = nextLeftChild;
            // nextNode.right.left = currentNode.right.left;

            // currentNode.right = nextNode.right.left;
            return;
          }
          previousLeftChild = nextLeftChild;
          nextLeftChild = nextLeftChild.left;
        }
      } else {
        const nextNode = currentNode.left;
        if (nextNode.value !== val) return (currentNode = currentNode?.left);

        const hasLeftChild = nextNode.left;
        const hasRightChild = nextNode.right;
        const hasChildren = hasLeftChild || hasRightChild;
        if (!hasChildren) return (currentNode.left = null);

        if (hasLeftChild && !hasRightChild)
          return (currentNode.left = nextNode.left);

        let nextLeftChild = nextNode.right?.left;
        const nextRightChild = nextNode.right?.right;
        if (!nextLeftChild && nextRightChild) {
          nextNode.right.left = currentNode.left.left;
          currentNode.left = nextNode.right;
          return;
        }
        if (!nextLeftChild && !nextRightChild) {
          nextNode.right.left = currentNode.left.left;
          currentNode.left = nextNode.right;
          return;
        }
        let previousLeftChild = nextNode.right;

        while (nextLeftChild) {
          if (!nextLeftChild.left) {
            // nextNode.left.left = null;
            previousLeftChild.left = null;
            nextLeftChild.left = currentNode.left.left;
            nextLeftChild.right = currentNode.left.right;
            currentNode.left = nextLeftChild;
            return;
          }

          previousLeftChild = nextLeftChild;
          nextLeftChild = nextLeftChild.left;
        }
      }

      if (!currentNode) return null;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(3);
bst.insert(7);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.insert(100);
bst.insert(180);
bst.insert(150);
bst.insert(90);
bst.insert(5);
bst.insert(8);
bst.insert(4);
// bst.remove(170);

// console.log(bst);
console.log(JSON.stringify(traverse(bst.root)));

console.log("------------------------------------------------");
// console.log(bst.lookup(20));
// console.log(bst.lookup(9));
// console.log(bst.lookup(100));

// bst.remove(1);
// bst.remove(170);
// bst.remove(20);
bst.remove(3);
bst.remove(20);
// console.log(bst.root.right);
// console.log(JSON.stringify(traverse(bst.root)));
console.log(JSON.stringify(traverseRecursive(bst.root)));
// console.log(JSON.stringify(traversalIterative(bst.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverseRecursive(node) {
  // * assign the root node
  // * traverse right and left
  if (!node) return;
  const result = { ...node };
  if (node.left) result.left = traverse(node.left);
  if (node.right) result.right = traverse(node.right);

  return result;
  // if (node.right) return { ...node, right: traverse(node.right) };
  // if (node.left) return { ...node, left: traverse(node.left) };
  // if (node.right) return { ...node, right: traverse(node.right) };
}

function traversalIterative(node) {
  const result = { value: node.value };

  let currentNodeLeft = node;
  let currentNodeRight = node;
  let resultTmpLeft = result;
  while (currentNodeLeft) {
    resultTmpLeft.left = currentNodeLeft.left;

    resultTmpLeft = resultTmpLeft.left;
    currentNodeLeft = currentNodeLeft.left;
  }

  let resultTmpRight = result;
  while (currentNodeRight) {
    resultTmpRight.right = currentNodeRight.right;

    resultTmpRight = resultTmpRight.right;
    currentNodeRight = currentNodeRight.right;
  }

  return result;
}

const ob = {
  value: 9,
  left: {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: {
      value: 7,
      left: { value: 5, left: null, right: null },
      right: { value: 8, left: null, right: null },
    },
  },
  right: {
    value: 90,
    left: { value: 15, left: null, right: null },
    right: {
      value: 170,
      left: {
        value: 100,
        left: null,
        right: { value: 150, left: null, right: null },
      },
      right: { value: 180, left: null, right: null },
    },
  },
};

const ob2 = {
  value: 9,
  right: {
    value: 90,
    right: {
      value: 170,
      right: { value: 180, right: null, left: null },
      left: {
        value: 100,
        right: { value: 150, right: null, left: null },
        left: null,
      },
    },
    left: { value: 15, right: null, left: null },
  },
  left: {
    value: 4,
    right: {
      value: 7,
      right: { value: 8, right: null, left: null },
      left: { value: 5, right: null, left: null },
    },
    // *FIXED
    // // ! issue: traverseRecursive
    // * some how that the left: { value: 1, right: null, left: null } doesn't appear here
  },
};

const ob2Fixed = {
  value: 9,
  right: {
    value: 90,
    left: { value: 15, left: null, right: null },
    right: {
      value: 170,
      left: {
        value: 100,
        left: null,
        right: { value: 150, left: null, right: null },
      },
      right: { value: 180, left: null, right: null },
    },
  },
  left: {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: {
      value: 7,
      left: { value: 5, left: null, right: null },
      right: { value: 8, left: null, right: null },
    },
  },
};

const ob3 = {
  value: 9,
  left: {
    value: 4,
    right: {
      value: 7,
      right: { value: 8, right: null, left: null },
      left: { value: 5, right: null, left: null },
    },
    left: { value: 1, right: null, left: null },
  },
  right: {
    value: 90,
    right: {
      value: 170,
      right: { value: 180, right: null, left: null },
      left: {
        value: 100,
        right: { value: 150, right: null, left: null },
        left: null,
      },
    },
    left: { value: 15, right: null, left: null },
  },
};
