// * https://repl.it/@aneagoie/mergeSort: the reference solution

// * the code bellow is my solution: (8h) ok
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  const length = array.length;
  if (length === 1) {
    return array;
  }
  // * Split Array in into right and left
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];
  const rightLen = right.length;
  const leftLen = left.length;
  if (leftLen === 1 && rightLen === 1) {
    if (left > right) {
      arr.push(right[0]);
      arr.push(left[0]);
    } else {
      arr.push(left[0]);
      arr.push(right[0]);
    }
    return arr;
  }
  if (leftLen === 1 && rightLen > 1) {
    const leftEl = left[0];

    if (leftEl <= right[0]) {
      arr = [leftEl, ...right];
      return arr;
    }

    if (leftEl >= right[rightLen - 1]) {
      arr = [...right, leftEl];
      return arr;
    }

    let added = false;
    for (let i = 0; i < rightLen; i++) {
      if (leftEl <= right[i] && !added) {
        arr.push(leftEl);
        arr.push(right[i]);
        added = true;
        continue;
      }
      arr.push(right[i]);
    }

    return arr;
  }

  if (rightLen === 1 && leftLen > 1) {
    const rightEl = right[0];

    if (rightEl <= left[0]) {
      arr = [rightEl, ...left];
      return arr;
    }

    if (rightEl >= left[leftLen - 1]) {
      arr = [...left, rightEl];
      return arr;
    }

    let added = false;
    for (let i = 0; i < leftLen; i++) {
      if (rightEl <= left[i] && !added) {
        arr.push(rightEl);
        arr.push(left[i]);
        added = true;
        continue;
      }
      arr.push(left[i]);
    }

    return arr;
  }

  // * case: rightLen > 1 and leftLen > 1
  // *NOTE: THIS IS CASE IS ENOUGH FOR THE ENTIRE FUNCTION WE CAN USE THIS CODE BELLOW FOR THE ENTIRE FUNCTION
  // * because we do some if check to handle some cases without looping then if that are those cases then everything will faster a little bit

  const length = leftLen + rightLen;

  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < length; i++) {
    if (leftIndex > leftLen - 1 && rightIndex > rightLen - 1) break;

    if (leftIndex > leftLen - 1 && rightIndex <= rightLen - 1) {
      arr.push(right[rightIndex]);
      rightIndex++;
      continue;
    }
    if (leftIndex <= leftLen - 1 && rightIndex > rightLen - 1) {
      arr.push(left[leftIndex]);
      leftIndex++;
      continue;
    }

    if (left[leftIndex] > right[rightIndex]) {
      arr.push(right[rightIndex]);
      rightIndex++;
    } else {
      arr.push(left[leftIndex]);
      leftIndex++;
    }
  }
  return arr;
}

function merge2(left, right) {
  let arr = [];
  const rightLen = right.length;
  const leftLen = left.length;
  const length = leftLen + rightLen;

  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < length; i++) {
    if (leftIndex > leftLen - 1 && rightIndex > rightLen - 1) break;

    if (leftIndex > leftLen - 1 && rightIndex <= rightLen - 1) {
      arr.push(right[rightIndex]);
      rightIndex++;
      continue;
    }
    if (leftIndex <= leftLen - 1 && rightIndex > rightLen - 1) {
      arr.push(left[leftIndex]);
      leftIndex++;
      continue;
    }

    if (left[leftIndex] > right[rightIndex]) {
      arr.push(right[rightIndex]);
      rightIndex++;
    } else {
      arr.push(left[leftIndex]);
      leftIndex++;
    }
  }
  return arr;
}

const answer = mergeSort(numbers);
console.log(answer);

// console.log(merge([1], [2]));
// console.log(merge([2], [1]));
// console.log(merge([7], [5, 6]));
// console.log(merge([4], [5, 6]));
// console.log(merge([6], [5, 8]));
// console.log(merge([6], [5, 8, 9]));
// console.log(merge([5, 6], [7]));
// console.log(merge([5, 6], [4]));
// console.log(merge([5, 8], [6]));
// console.log(merge([5, 8, 9], [6]));
// console.log(merge([5, 8, 9], [6, 3, 5]));
// console.log(merge([5, 8, 9], [6, 7, 10]));
// console.log(merge([5, 8], [6, 7, 10]));
// console.log(merge([5, 8, 9], [6, 10]));
