// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let k = i+1; k < nums.length; k++) {
            if(nums[k] !== nums[i]) {
                nums.splice(i+1, (k-i-1));
                i -= (k-i-1)
                break;
            }
        }
    }
    return nums.length
};