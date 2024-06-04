// input: string
// output: reversed string
// do: reverse the string

function reverseStringWorse(str) {
  // * 1: convert it to array
  const arr = str.split("");
  // * 2: loop over the array
  // * 3: create another arr then add element from the start of array [1,2,4]  [4,2,1]
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.unshift(arr[i]);
  }

  return resultArr.join("");
}

function reverseString(str) {
  // * refuse string with empty and only have 1 letter
  const length = str.length;

  if (!str || length < 2) return str;
  // * 1: convert it to array
  //   const arr = str.split("");
  // * 2: loop over the array
  // * 3: create another arr then add element from the start of array [1,2,4]  [4,2,1]
  const resultArr = [];
  for (let index = 0; index <= length; index++) {
    resultArr[index] = str[length - index];
  }

  return resultArr.join("");
}

console.log(reverseString("Hello You!"));

function reverseStringSimpleInJS(str) {
  return str.split("").reverse().join("");
}

const reverseStringSimpleInJS2 = (str) => str.split("").reverse().join("");

const reverseStringSimpleInJS3 = (str) => [...str].reverse().join("");

console.log(reverseStringSimpleInJS("Hello You!"));
console.log(reverseStringSimpleInJS2("Hello You!"));
console.log(reverseStringSimpleInJS3("Hello You!"));
