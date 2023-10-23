// https://leetcode.com/problems/find-pivot-index

function pivotIndex(nums: number[]): number {
    const n = nums.length;
    let leftsums = new Array(n+1), rightsums = new Array(n+1);
    leftsums[0] = 0, rightsums[0] = 0;
    for(let i=1; i < n+1; i++) {
        leftsums[i] = (nums[i-1]+leftsums[i-1]);
        rightsums[i] = (nums[n-i]+rightsums[i-1]);
    }
    for(let i=0; i <= n; i++) {
        if(leftsums[i] == rightsums[n-(i+1)]) return i;
    }
    return -1;
};