// https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
    let i = 0;
    let end = nums.length-1;
    while(i <= end) {
        if(nums[i] == val) {
            if(nums[end] == val) {
                end--;
            }else{
                [nums[i], nums[end]] = [nums[end], nums[i]];
                i++;
                end--;
            }
        }else{
            i++;
        }
    }
    //console.log(nums, i, end)
    return i;
};