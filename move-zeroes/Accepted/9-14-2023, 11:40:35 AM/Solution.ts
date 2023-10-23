// https://leetcode.com/problems/move-zeroes

/**
 Do not return anything, modify nums in-place instead.
 */
function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
function moveZeroes(nums: number[]): void {
    // /* First */
    // for(let i=nums.length; i >= 0; i--) {
    //     if(nums[i] == 0) {
    //         let k = i;
    //         while(k+1 < nums.length && nums[k+1] != 0) {
    //             // swap(nums, k, k+1);
    //             [nums[k], nums[k+1]] = [nums[k+1], nums[k]];
    //             k++;
    //         }
    //     }
    // }

    // /* second */
    // let counts = [];
    // const n = nums.length;
    // for(let i=0; i < n; i++) {
    //     if(nums[i] == 0) {
    //         counts.push(i);
    //     }
    // }
    // let cindex = 0;
    // for(let i = 0; i < n; i++) {
    //     if(cindex+1 < counts.length && i >= counts[cindex+1]) {
    //         cindex++;
    //     }
    //     // && (cindex+1 >= counts.length || 
    //     if(i > counts[cindex]) {
    //         swap(nums, i, i-(cindex+1));
    //         console.log(nums)
    //     }
    // }

    let index = 0;
    const n = nums.length;
    for(let i=0; i < n; i++) {
        if(nums[i] != 0) nums[index++] = nums[i];
    }
    for(; index < n; index++) {
        nums[index] = 0;
    }
};