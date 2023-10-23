// https://leetcode.com/problems/maximum-difference-by-remapping-a-digit

function minMaxDifference(num: number): number {
    let nums = num.toString();
    let max = -Infinity, min=Infinity;
    for(let i=0; i < 10; i++) {
        let mx = parseInt(nums.replace(new RegExp(`${i}`,"g"), "9"));
        let my = parseInt(nums.replace(new RegExp(`${i}`,"g"), "0"));
        max = Math.max(max, mx);
        min = Math.min(min, my);
    }
    return max-min
};