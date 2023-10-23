// https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
  const sums = {};
  for(let i = 0; i < nums.length; i++) {
    if((target-nums[i]) in sums) {
      return [sums[target-nums[i]], i];
    }
    sums[nums[i]] = i; 
  }
};