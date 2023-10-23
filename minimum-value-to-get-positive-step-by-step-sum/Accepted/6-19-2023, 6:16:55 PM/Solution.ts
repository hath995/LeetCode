// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum


function minStartValue(nums: number[]): number {
    return Math.max(-Math.min.apply(null, nums.reduce((memo, cur) => (memo.push(cur+(memo[memo.length-1] ?? 0)), memo), [] as number[]))+ 1, 1)
};