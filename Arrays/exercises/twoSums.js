// * 1 TWO SUM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumWorseCase = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return result;
};

const twoSums1 = function (numsArr, target) {
  const result = [];
  const nums = numsArr.sort().reverse();
  let high = nums.length - 1;
  let low = 0;

  for (let i = 0; i < nums.length; i++) {
    const sum = nums[high] + nums[low];

    if (sum === target) {
      result.push(low);
      result.push(high);
      break;
    }

    if (sum > target) {
      if (nums[high] > nums[low]) high--;
      if (nums[high] < nums[low]) low++;
    }

    if (sum < target) {
      if (nums[high] > nums[low]) low++;
      if (nums[high] < nums[low]) high--;
    }
  }

  return !result.length ? [] : result;
};

const twoSums = function (numsArr, target) {
  const result = [];
  const arrSet = new Set();

  for (let i = 0; i < numsArr.length; i++) {
    if (target - numsArr[i] >= 0) arrSet.add(target - numsArr[i]);

    if (arrSet.has(numsArr[i])) {
      const index = numsArr.indexOf(target - numsArr[i]);
      result[0] = index;
      result[1] = i;
    }
  }

  return !result.length ? [] : result;
};

const nums = [3, 2, 4],
  target = 6;

console.log(twoSums(nums, target));
