// https://leetcode.com/problems/sqrtx

function nm(x, c) {
    return x - (c-x*x)/(-2*x);
}

function mySqrt(x: number): number {
    let x0 = x;
    let x1 = 0;
    while(Math.abs(x0-x1) > 0.5) {
        x1 = nm(x0, x);
        [x0,x1] = [x1,x0];
    }
    return Math.floor(x0);
};