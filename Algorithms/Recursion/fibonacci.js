// * fibonacci:

// * in fibonacci we always have fibonacci of 0 = 0 and fibonacci of 1 = 1, and we will calculate the fibonacci of n based on these 2 base values
// * fibonacci of n = fibonacci of (n-1) + fibonacci of (n-2)
// * fibonacci of 2 = fibo1 + fibo0 = 1 + 0 = 1
// * fibonacci of 3 = fibo2+ fibo1 = 1 + 1 = 2

// * ITERATIVE WITH FOR LOOP
function fibonacciIterative(num) {
  if (num < 0) throw Error("Number is invalid");
  if (num >= 0 && num <= 1) return num;

  const fiboArr = [0, 1];

  for (let i = 2; i <= num; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }

  return fiboArr[num];
}

console.log(fibonacciIterative(8));

// * RECURSION
function fibonacciRecursion(num) {
  if (num < 0) throw Error("Number is invalid");
  if (num >= 0 && num <= 1) return num;

  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
  // *fibonacciRecursion(5) return fibonacciRecursion(4) + fibonacciRecursion(3)
  // * call fibonacciRecursion(4) + fibonacciRecursion(3) = fibonacciRecursion(3) + fibonacciRecursion(2) + fibonacciRecursion(1)+ fibonacciRecursion(2)
  // * = fibonacciRecursion(2) + fibonacciRecursion(1) + fibonacciRecursion(1) + fibonacciRecursion(0) + 1 + fibonacciRecursion(1) + fibonacciRecursion(0)
  // * = fibonacciRecursion(1) + fibonacciRecursion(0) + 1 + 1 + 0 + 1 + 1 + 0
  // * = 1 + 0 + 4 = 5
}

console.log(fibonacciRecursion(8));
