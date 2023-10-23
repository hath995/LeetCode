// https://leetcode.com/problems/maximum-product-difference-between-two-pairs

function maxProductDifference(nums: number[]): number {
    let n = nums.length;
    nums.sort((a,b)=>a-b);
    return nums[n-1]*nums[n-2] - (nums[1]*nums[0])
};