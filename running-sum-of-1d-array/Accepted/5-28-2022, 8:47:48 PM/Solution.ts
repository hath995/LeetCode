// https://leetcode.com/problems/running-sum-of-1d-array

function runningSum(nums: number[]): number[] {
    return nums.reduce((memo, val, imdex)=>{
        if(memo.length == 0) {
            memo.push(val);
        } else {
            memo.push(val + memo[memo.length-1]);
        }
        return memo;
    },[])
};