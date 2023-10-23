// https://leetcode.com/problems/fibonacci-number

function fib(n: number, index: number = 1, curr: number = 0, next: number = 1): number {
    if(n == 0) return 0;
    if(n == 1) return 1;
    
    if(index >= n) {
        return next;
    }else{
        return fib(n, index + 1, next, curr+next);
    }
};