// https://leetcode.com/problems/set-mismatch

function findErrorNums(nums: number[]): number[] {
    let numMap = new Map();
    let theDouble = 0;
    let max = 0;
    for(let num of nums) {
        if(num > max) max = num 
        if(numMap.has(num)) {
            theDouble = num;
            numMap.set(num, 2);
        }else{
            numMap.set(num, 1);    
        }
    }
    let missing = 0;
    for(let i = 1; i <= max+1; i++) {
        if(!numMap.has(i)) {
            missing = i;
            break;
        }  
    }
    return [theDouble, missing];
};