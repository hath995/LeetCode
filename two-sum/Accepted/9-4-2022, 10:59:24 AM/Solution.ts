// https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let k = i+1; k < n; k++) {
            if(nums[i] + nums[k] == target) return [i,k]; 
        }
    }
};