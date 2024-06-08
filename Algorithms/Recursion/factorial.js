let track = 0;
let answer = 1;

function findFactorialRecursive(number) {
  if (number < 0) throw Error("Number is invalid");
  if (number >= 0 && number <= 2) return number;

  // * so instead of loop over until 1 we can stop at 2 because well number * 1 = number right and it's not necessary to do it right
  // if (track === number) return answer;
  if (track === number - 1) return answer;

  answer = answer * (number - track);
  track++;
  return findFactorialRecursive(number);
}

// * this is how we use the recursion, and we need to have more experiences to really familiar and easy to use it better
function findFactorialRecursiveV2(number) {
  if (number < 0) throw Error("Number is invalid");
  if (number >= 0 && number <= 2) return number;

  return number * findFactorialRecursiveV2(number - 1);
}

function findFactorialIterative(number) {
  if (number < 0) throw Error("Number is invalid");
  if (number >= 0 && number <= 2) return number;

  let answer = 1;
  // for (let i = number; i > 0; i--) {
  // * so instead of loop over until 1 we can stop at 2 because well number * 1 = number right and it's not necessary to do it right
  for (let i = number; i > 1; i--) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
console.log(findFactorialRecursiveV2(5));
