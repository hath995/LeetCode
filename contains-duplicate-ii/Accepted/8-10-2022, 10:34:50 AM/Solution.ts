// https://leetcode.com/problems/contains-duplicate-ii

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let windowSet = new Set();
    const n = nums.length;
    if(k == 0) return false;
    for(let i = 0; i < n; i++) {
        //console.log(windowSet, i, i-k)
        if(windowSet.has(nums[i])) {
            return true;
        }
        if(i >= k) {
            windowSet.delete(nums[i-k]);
        }
        windowSet.add(nums[i]);
        //console.log("end", windowSet, i, i-k)

    }
    return false;
};