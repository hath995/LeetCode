// https://leetcode.com/problems/move-zeroes

/**
 Do not return anything, modify nums in-place instead.
 */
function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
function moveZeroes(nums: number[]): void {
    for(let i=nums.length; i >= 0; i--) {
        if(nums[i] == 0) {
            let k = i;
            while(k+1 < nums.length && nums[k+1] != 0) {
                // swap(nums, k, k+1);
                [nums[k], nums[k+1]] = [nums[k+1], nums[k]];
                k++;
            }
        }
    }
};