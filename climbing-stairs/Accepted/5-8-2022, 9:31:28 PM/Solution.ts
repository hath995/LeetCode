// https://leetcode.com/problems/climbing-stairs

function climbStairs(n: number): number {
    let steps = new Array(n+1);
    steps[0] = 0;
    steps[1] = 1;
    steps[2] = 2;
    for(let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2]
    }
    return steps[n];
};