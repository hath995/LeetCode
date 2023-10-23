// https://leetcode.com/problems/pascals-triangle-ii

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
    if(n * k == 0) return 1;
   let base = n;
    for(let i = n-1; i > (n-k); i--) {
        base = base * i;
    }
    return base/factorial(k);
}

function getRow(rowIndex: number): number[] {
    let result: number[] = [];
    for(let i = 0; i <= rowIndex; i++) {
        result.push(choose(rowIndex, i));
    }
    return result;
};