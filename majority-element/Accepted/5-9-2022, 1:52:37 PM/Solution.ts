// https://leetcode.com/problems/majority-element

function majorityElement(nums: number[]): number {
/*
majority = count = 0
for value in nums:
	if count == 0: majority = value
	count += -1 + (2 * int(majority == value))
return majority
*/
    let majority = 0, count = 0;
    for(let num of nums) {
        if(count == 0) majority = num;
        count += -1 + 2*Number(majority == num);
    }
    return majority;
};