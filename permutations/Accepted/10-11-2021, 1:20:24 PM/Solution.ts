// https://leetcode.com/problems/permutations

function * genPerms(nums: number[], acc: number[]) {
  if(nums.length == 0) {
    yield acc;
    return;
  }
  for(let i = 0; i < nums.length; i++) {
    let foo = nums.slice()
    foo.splice(i,1)
    yield * genPerms(foo, acc.concat([nums[i]]));
  }
} 

function permute(nums: number[]): number[][] {
  return Array.from(genPerms(nums, []))
};