// https://leetcode.com/problems/minimum-increment-to-make-array-unique

function minIncrementForUnique(nums: number[]): number {
    const numsSet = new Set();
    let moves = 0;
    for(let i=0; i<nums.length; i++){

        if(numsSet.has(nums[i])){
            do{

                nums[i]++;
                moves++;

            }while(numsSet.has(nums[i]))
                numsSet.add(nums[i]);
        } else {
            numsSet.add(nums[i]);
        }

    }
    return moves;
};