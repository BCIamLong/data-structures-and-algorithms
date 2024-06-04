function mergeSortedArrayWorse(arr1, arr2) {
  //O of n^2
  const totalArr = arr1.concat(arr2);
  const length = totalArr.length;
  for (let index1 = 0; index1 < length; index1++) {
    for (let index2 = 0; index2 < length; index2++) {
      if (totalArr[index1] < totalArr[index2]) {
        const tempItem = totalArr[index1];
        totalArr[index1] = totalArr[index2];
        totalArr[index2] = tempItem;
      }
    }
  }

  return totalArr;
}

function mergeSortedArray1(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  let index = 0;
  while (index < length) {
    // do something
    index++;
  }

  return mergedArray;
}

function mergeSortedArray2(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  // * when we use const to store array then that mean we can't assign it again so basically change the reference of the array to another array right
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  // console.log(mergeSortedArray([3, 4, 6], [1, 2, 5, 8]));
  let index1 = 1;
  let index2 = 1;
  while (arr1Item || arr2Item) {
    // do something
    const isArr1ItemExisted = arr1Item || arr1Item === 0;
    const isArr2ItemExisted = arr2Item || arr2Item === 0;

    if (!isArr1ItemExisted && isArr2ItemExisted) {
      mergedArray.push(arr2Item);
      arr2Item = arr2[index2];
      index2++;
    }
    if (!isArr2ItemExisted && isArr1ItemExisted) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[index1];
      index1++;
    }

    if (isArr1ItemExisted && isArr2ItemExisted) {
      if (arr1Item > arr2Item) {
        mergedArray.push(arr2Item);
        arr2Item = arr2[index2];
        index2++;
      } else if (arr1Item < arr2Item) {
        mergedArray.push(arr1Item);
        arr1Item = arr1[index1];
        index1++;
      } else {
        mergedArray.push(arr1Item);
        mergedArray.push(arr2Item);
        arr1Item = arr1[index1];
        arr2Item = arr2[index2];
        index1++;
        index2++;
      }
    }

    // console.log("ok")
  }

  return mergedArray;
}

// * in the interview we can divide the code to many parts and explain how to work and not really have to write the actual code
const checkArray1ItemIsExistedAndPushToMergedArray = function () {
  if (!isArr1ItemExisted && isArr2ItemExisted) {
    mergedArray.push(arr2Item);
    arr2Item = arr2[index2];
    index2++;
  }
};

const checkArray2ItemIsExistedAndPushToMergedArray = function () {
  if (!isArr2ItemExisted && isArr1ItemExisted) {
    mergedArray.push(arr1Item);
    arr1Item = arr1[index1];
    index1++;
  }
};

const checkBothArrayItemsAreExistedAndCompareThenPushToMergedArray =
  function () {
    if (isArr1ItemExisted && isArr2ItemExisted) {
      if (arr1Item > arr2Item) {
        mergedArray.push(arr2Item);
        arr2Item = arr2[index2];
        index2++;
      } else if (arr1Item < arr2Item) {
        mergedArray.push(arr1Item);
        arr1Item = arr1[index1];
        index1++;
      } else {
        mergedArray.push(arr1Item);
        mergedArray.push(arr2Item);
        arr1Item = arr1[index1];
        arr2Item = arr2[index2];
        index1++;
        index2++;
      }
    }
  };

function mergeSortedArray(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  // * when we use const to store array then that mean we can't assign it again so basically change the reference of the array to another array right
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  // console.log(mergeSortedArray([3, 4, 6], [1, 2, 5, 8]));
  let index1 = 1;
  let index2 = 1;
  while (arr1Item || arr2Item) {
    // do something
    const isArr1ItemExisted = arr1Item || arr1Item === 0;
    const isArr2ItemExisted = arr2Item || arr2Item === 0;

    if (!isArr1ItemExisted && isArr2ItemExisted) {
      mergedArray.push(arr2Item);
      arr2Item = arr2[index2];
      index2++;
    }
    if (!isArr2ItemExisted && isArr1ItemExisted) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[index1];
      index1++;
    }

    if (isArr1ItemExisted && isArr2ItemExisted) {
      if (arr1Item > arr2Item) {
        mergedArray.push(arr2Item);
        arr2Item = arr2[index2];
        index2++;
      } else if (arr1Item < arr2Item) {
        mergedArray.push(arr1Item);
        arr1Item = arr1[index1];
        index1++;
      } else {
        mergedArray.push(arr1Item);
        mergedArray.push(arr2Item);
        arr1Item = arr1[index1];
        arr2Item = arr2[index2];
        index1++;
        index2++;
      }
    }

    // console.log("ok")
  }

  return mergedArray;
}

console.log(mergeSortedArray([3, 4, 6], [1, 2, 5, 8]));
console.log(mergeSortedArray([], [1, 2, 5, 8]));
console.log(mergeSortedArray([3, 4, 6], []));
console.log(mergeSortedArray([], []));
