// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let k = i+1; k < nums.length; k++) {
            if(nums[k] !== nums[i]) {
                nums.splice(i+1, (k-i-1));
                i -= (k-i-1)
                break;
            }else if(k == nums.length - 1 && nums[i] == nums[k]) {
                nums.splice(i+1, nums.length-k)
                break;
            }
            
        }
    }
    return nums.length
};