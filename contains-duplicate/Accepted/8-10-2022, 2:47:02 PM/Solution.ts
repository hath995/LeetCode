// https://leetcode.com/problems/contains-duplicate

function containsDuplicate(nums: number[]): boolean {
    let m = new Set();
    for(let elem of nums) {
        if(m.has(elem)) {
            return true;
        }
        m.add(elem);
    }
    return false;
};