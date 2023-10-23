// https://leetcode.com/problems/set-mismatch

function findErrorNums(nums: number[]): number[] {
    let numMap = new Map();
    let theDouble = 0;
    for(let num of nums) {
        if(numMap.has(num)) {
            theDouble = num;
            numMap.set(num, 2);
        }else{
            numMap.set(num, 1);    
        }
    }
    return [theDouble, numMap.has(theDouble+1) ? theDouble-1 : theDouble+1];
};