//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  // * loop
  // * each loop store the value to an array to check later
  // * if we the later item is included in this array then just return itself

  // const checkArr = [];
  // const setResult = new Set();
  // const map = {};

  for (let i = 0; i < input.length; i++) {
    // * solution 1: O(n^2) because includes we also need to loop entire array
    // if (checkArr.includes(input[i])) return input[i];
    // checkArr.push(input[i]);
    for (let j = 0; j < i; j++) {
      if (input[j] === input[i]) return input[i];

      // checkArr.push(input[i]);
    }

    // * solution 2: O(n)
    // if (setResult.has(input[i])) return input[i];
    // setResult.add(input[i]);

    // * solution 3: O(n)
    // if (map[input[i]]) return input[i];
    // map[input[i]] = true;
  }

  return;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
