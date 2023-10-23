// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i+1,1);
        }else{
            i++;
        }
        
    }
    return nums.length
};