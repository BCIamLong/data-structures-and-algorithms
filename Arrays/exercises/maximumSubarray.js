/**
 * @param {number[]} nums
 * @return {number}
 */
// input: an integer array (0,1,-1...)
// output: subarray with the largest sum like (9, 12...)
// find the subarray with the largest sum
var maxSubArray = function (nums) {
  // * loop based on the length of the nums
  const length = nums.length;
  const sums = [];
  // * then we can calculate the sum between 2 numbers ... n numbers (elements) (must be sequence it's not random)
  for (let i = 0; i < length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < i; j++) {
      sum1 += nums[j];
    }
    for (let j = length - 1; j > i; j--) {
      sum2 += nums[j];
    }

    if (sum1 > sum2) sums.push(sum1);
    else sums.push(sum2);
  }
  // * then we can take the big value
  let max = sums[0];
  for (let i = 1; i < sums.length; i++) {
    if (sums[i] > max) max = sums[i];
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
