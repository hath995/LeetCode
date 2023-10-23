// https://leetcode.com/problems/number-of-1-bits

function hammingWeight(n: number): number {
    let count = 0;
    for(let i = 0; i < 32; i++) {
        count += n & 1;
        n = n >> 1;
    }
    return count;
};