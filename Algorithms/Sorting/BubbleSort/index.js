const bubbleSort = function (arr) {
  const length = arr.length;
  if (!length && length !== 0) return;
  if (length === 1 || length === 0) return arr;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // if (arr[j] <= arr[j + 1]) continue; //* continue only ignore the line of code not entire loop so the code bellow still be executed
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
};

const arr1 = [1, 10, 12, 4, 6, 8, 2, 9, 3];

bubbleSort(arr1);
console.log(arr1);
