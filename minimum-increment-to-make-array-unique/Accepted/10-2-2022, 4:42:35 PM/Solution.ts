// https://leetcode.com/problems/minimum-increment-to-make-array-unique

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function swap(arry, i, j) {
    let temp = arry[i];
    arry[i] = arry[j]
    arry[j] = temp;
}

function minIncrementForUnique(nums: number[]): number {
    nums.sort((a,b) => a - b);
    //console.log(nums);
    //const numsSet: Set<number> = new Set();
    //const dupes: Set<number> = new Set();
    let moves = 0;
    for(let i= nums.length; i >= 0; i--){
        if(nums[i] == nums[i+1] && i+1 < nums.length) {
            //console.log(nums)
            //console.log(i, i+1, nums[i])
            let k = 0;
            //console.log("b",i+1+k, i+k, nums[i+1+k], nums[i+k])
            while(nums[i+1+k] - nums[i+k] <= 1) {
                //console.log("e",i+1+k, i+k, nums[i+1+k], nums[i+k])
                k++;
            }
            moves += k; 
            nums[i+1] = nums[i+1]+k;
            //console.log("t",nums)
            for(let j = 0; j < k-1; j++) {
               swap(nums,i+1+j, i+2+j);
            }
            //console.log("q",nums)
        }
    }
    return moves;
};