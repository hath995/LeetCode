// https://leetcode.com/problems/maximum-average-subarray-i

function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    for(let j =0; j < k; j++) {
        sum += nums[j];
    }
    let max = sum;
    const n = nums.length;
    for(let i=k; i < n;i++) {
        sum = sum - nums[i-k] + nums[i];
        max = Math.max(max, sum);
    }
    return max/k;
};