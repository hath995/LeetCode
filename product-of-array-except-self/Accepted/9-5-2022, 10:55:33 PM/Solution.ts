// https://leetcode.com/problems/product-of-array-except-self

function g(nums: number[], index: number): number {
    return nums[index] !== undefined ? nums[index] : 1;
}

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let result: number[] = new Array(n);
    let leftScan: number[] = new Array(n);
    let rightScan: number[] = new Array(n);
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            leftScan[i] = nums[0];
            rightScan[n-1] = nums[n-1];
        }else{
            leftScan[i] = nums[i]*leftScan[i-1];
            rightScan[n-(i+1)] = nums[n-(i+1)]*rightScan[n-i];
        }
    }
    //console.log(leftScan);
    //console.log(rightScan);
    for(let i = 0; i < n; i++) {
        result[i] = g(leftScan, i-1)*g(rightScan, i+1);
    }
    return result;
};