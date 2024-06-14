// * https://www.youtube.com/watch?v=ROalU379l3U&list=PLcX11VWS1PdA4dSPip8-1JfKxFa32X53y&index=7
// * see the video to see the visualize of this algorithm to easy understand how it works

const insertionSort = function (arr) {
  const len = arr.length;

  // let look = 0;
  for (let i = 0; i < len; i++) {
    // * [4,6,5,2] 2 < 4 => [2,4,6,5] and then we continue do the job, but if the item is less than the first item we don't need to loop and swap instead we swap it immediately and don't need to perform some redundant (du thua) works
    if (arr[i] < arr[0]) {
      const tmp = arr[0];
      arr[0] = arr[i];
      arr[i] = tmp;
      continue;
    }

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
};

const arr1 = [1, 10, 12, 4, 6, 8, 2, 9, 3];

insertionSort(arr1);
console.log(arr1);
