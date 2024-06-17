// * the reference solution: https://repl.it/@aneagoie/quickSort
// * the code bellow is my solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// let a = 0;
function quickSort(array, left, right) {
  // a++;
  // const pivot = Math.floor(array.length / 2);
  const pivot = 0;
  const { leftArr, rightArr, pivotVal } = partition(array, pivot, left, right);
  if (!leftArr?.length && !rightArr?.length && !pivotVal) return [];

  // console.log(leftArr);
  // console.log(pivotVal);
  // console.log(rightArr);

  // const rightCheck = quickSort(rightArr, 0, rightArr.length - 1);
  // const leftCheck = quickSort(leftArr, 0, leftArr.length - 1);

  // if (typeof rightCheck === "number" && Array.isArray(leftCheck))
  //   return [...leftCheck, pivotVal, rightCheck];

  // if (typeof leftCheck === "number" && Array.isArray(rightCheck))
  //   return [leftCheck, pivotVal, ...rightCheck];

  // if (typeof rightCheck === "number" && typeof leftCheck === "number")
  //   return [leftCheck, pivotVal, rightCheck];

  // if (Array.isArray(leftCheck) && Array.isArray(rightCheck))
  return [
    ...quickSort(leftArr, 0, leftArr.length - 1),
    pivotVal,
    ...quickSort(rightArr, 0, rightArr.length - 1),
  ];
}

function partition(array, pivot, left, right) {
  if (!array.length) return {};
  let i = 0;
  let track = "right";
  // [44, 6, 2, 1, 5, 63, 87, 4]
  // while (i < array.length) {
  let pivotVal = array[pivot];
  while (
    !(
      array[pivot] >= array[pivot - 1] &&
      array[pivot] <= array[pivot + 1] &&
      i > array.length
    )
  ) {
    if (i === array.length - 1 && array[pivot] === pivotVal) {
      return {
        leftArr: array.slice(0, pivot),
        rightArr: array.slice(pivot + 1),
        pivotVal: array[pivot],
      };
    }

    if (track === "right") {
      if (array[pivot] >= array[right]) {
        // console.log("ok");
        //swap
        swap(array, pivot, right);
        track = "left";
        // right--;
        pivot = right;
        left++;
      } else {
        right--;
      }
      i++;
      continue;
    }

    if (track === "left") {
      // console.log("ok");
      if (array[pivot] <= array[left]) {
        //swap
        swap(array, pivot, left);
        track = "right";
        pivot = left;
        // left++;
        right--;
      } else {
        left++;
      }
      i++;
      continue;
    }
  }

  return {
    leftArr: array.slice(0, pivot),
    rightArr: array.slice(pivot + 1),
    pivotVal: array[pivot],
  };
}

function swap(array, firstIndex, secondIndex) {
  const tmp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tmp;
}

//Select first and last index as 2nd and 3rd parameters
const result = quickSort(numbers, 0, numbers.length - 1);
console.log(result);
// console.log(a);
// console.log(numbers);

// const numbers2 = [2, 3, 4, 5, 1];
// quickSort(numbers2, 0, numbers.length - 1);
// console.log(numbers2);

// console.log("------------------------------------------------------------");

// console.log(partition([44, 6, 2, 1, 5, 63, 87, 4], 0, 0, 7));
// console.log(partition([4, 6, 2, 1, 5], 0, 0, 4));
// console.log(partition(numbers2, 0, 0, numbers2.length - 1));
// console.log(partition([283], 0, 0, 0));

// const number2 = [0, 44, 6, 2, 1, 5, 63, 87, 4];
