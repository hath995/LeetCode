// https://leetcode.com/problems/combinations

function * genCombins(nums: number[], acc: number[], target: number) {
  if(acc.length == target) {
    yield acc;
    return;
  }
  for(let i = 0; i < nums.length; i++) {
    let foo = nums.slice(i+1)
    yield * genCombins(foo, acc.concat([nums[i]]), target);
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
  return Array.from(genCombins(range(n), [], k))
};