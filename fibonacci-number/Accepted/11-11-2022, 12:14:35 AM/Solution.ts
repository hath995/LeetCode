// https://leetcode.com/problems/fibonacci-number

// function fib(n: number, index: number = 1, curr: number = 0, next: number = 1): number {
//     if(n == 0) return 0;
//     if(n == 1) return 1;
//     
//     if(index >= n) {
//         return next;
//     }else{
//         return fib(n, index + 1, next, curr+next);
//     }
// };

let times = (...matrices) =>
  matrices.reduce(
    ([a,b,c], [d,e,f]) => [a*d + b*e, a*e + b*f, b*e + c*f]
  );

let power = (matrix, n) => {
  if (n === 1) return matrix;

  let halves = power(matrix, Math.floor(n / 2));

  return n % 2 === 0
         ? times(halves, halves)
         : times(halves, halves, matrix);
}

let fib = (n) =>
  n < 2
  ? n
  : power([1, 1, 0], n - 1)[0];