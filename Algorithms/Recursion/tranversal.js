// * {{value:1, right:{}, left:{}}

function traverseRecursive(node) {
  // * assign the root node
  // * traverse right and left
  if (!node) return;

  // * so basically we will have recursion {...node} => destructor object and we also have fields like value, left, right and then we overwrite the left or right depend on where to traverse next
  // * and recursion will repeat until we we have node left and right node so that's it
  // * {value, left: traverse(node.left), right} = {value, left: {val, right, left:  traverse(node.left)}, right}...
  // * so something like this and it's similar with the right side

  if (node.left) return { ...node, left: traverse(node.left) };
  if (node.right) return { ...node, right: traverse(node.right) };
  // if (node.left) return { ...node, left: traverse(node.left) };
  // if (node.right) return { ...node, right: traverse(node.right) };
}

function traversal(node) {
  const result = { value: node.value };

  let currentNode = node;
  while (currentNode) {
    result.left = currentNode.left;

    currentNode = currentNode.left;
  }

  while (currentNode) {
    result.right = currentNode.right;

    currentNode = currentNode.right;
  }

  return result;
}
