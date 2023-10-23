// https://leetcode.com/problems/maximum-average-subarray-i

function findMaxAverage(nums: number[], k: number): number {
    let max = -Infinity;
    let sum = 0;
    for(let i=k-1; i < nums.length;i++) {
        if(i == k-1) {
            for(let j =0; j < k; j++) {
                sum += nums[j];
            }
            max = sum;
            // console.log("got here", sum, max)
        }else{
            sum = sum - nums[i-k] + nums[i];
            max = Math.max(max, sum);
            // console.log("got there", sum, max)
        }
    }
    return max/k;
};