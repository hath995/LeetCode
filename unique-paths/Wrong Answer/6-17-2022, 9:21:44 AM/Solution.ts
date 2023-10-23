// https://leetcode.com/problems/unique-paths

function factorial(n: number):number {
    if (n <= 1) {
        return 1;
    }else{
       let fact = 1;
       for(let k = 1; k <= n; k++) {
           fact = fact * k;
       }
        return fact;
    }
}

function choose(n: number, k: number): number {
   let base = n;
    for(let i = n-1; i > (n-k); i--) {
        base = base * i;
    }
    return base/factorial(k);
}

function uniquePaths(m: number, n: number): number {
    return choose(m+n-2,n-1);
};