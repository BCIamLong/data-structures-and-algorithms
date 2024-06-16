// * the reference solution: https://repl.it/@aneagoie/quickSort
// * the code bellow is my solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const { leftArr, rightArr, pivotVal } = partition(array, 0, left, right);
  if (!leftArr?.length && !rightArr?.length) return [];

  // console.log(leftArr);
  // console.log(rightArr);

  return [...quickSort(leftArr), pivotVal, ...quickSort(rightArr)];
}

function partition(array, pivot, left, right) {
  if (!array.length) return {};
  let i = 0;
  let track = "right";
  // [44, 6, 2, 1, 5, 63, 87, 4]
  // while (i < array.length) {
  let pivotVal = array[pivot];
  while (
    !(array[pivot] >= array[pivot - 1] && array[pivot] <= array[pivot + 1])
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
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// const numbers2 = [1, 3, 4, 5, 2];
// quickSort(numbers2, 0, numbers.length - 1);
// console.log(numbers2);

// console.log(partition([44, 6, 2, 1, 5, 63, 87, 4], 0, 0, numbers.length - 1));

// const number2 = [0, 44, 6, 2, 1, 5, 63, 87, 4];
// console.log(partition(number2, 0, 0, number2.length - 1));
