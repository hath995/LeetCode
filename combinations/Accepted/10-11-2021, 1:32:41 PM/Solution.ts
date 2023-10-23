// https://leetcode.com/problems/combinations

function * genCombins(nums: number[], acc: number[], start:number, target: number) {
  if(acc.length == target) {
    yield acc;
    return;
  }
  for(let i = start; i < nums.length; i++) {
    yield * genCombins(nums, acc.concat([nums[i]]), i+1, target);
  }
} 

function range(n) {
 let result = [];
 for(let i = 0; i < n; i++) {
   result[i] = i+1;
 }
 return result;
}

function combine(n: number, k: number): number[][] {
  return Array.from(genCombins(range(n), [], 0, k))
};