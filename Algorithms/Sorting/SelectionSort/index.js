const selectionSort = function (arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = arr[i];
    let minIndex;
    for (let j = i; j < length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }

    if (arr[i] !== min) {
      arr[minIndex] = arr[i];
      arr[i] = min;
    }

    // if (arr[i] === min) continue;
    // else {
    //   arr[minIndex] = arr[i];
    //   arr[i] = min;
    // }
  }
};

const arr1 = [1, 10, 12, 4, 6, 8, 2, 9, 3];

selectionSort(arr1);
console.log(arr1);
