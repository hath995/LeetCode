// https://leetcode.com/problems/subsets

function * yieldSubset(nums: number[], index: number, acc: number[]) {
    if(nums.length == index) {
        yield acc;
    }else{
        yield * yieldSubset(nums, index + 1, acc.concat([nums[index]]));
        yield * yieldSubset(nums, index+1, acc);
    }
}

function subsets(nums: number[]): number[][] {
    return Array.from(yieldSubset(nums, 0, []));
};