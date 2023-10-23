// https://leetcode.com/problems/build-array-from-permutation

function buildArray(nums: number[]): number[] {
    let result = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
    }
    return result;
};