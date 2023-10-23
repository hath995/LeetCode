// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array

// function countPairs(nums: number[], k: number): number {
//     let count = 0;
//     for(let i = 0; i < nums.length-1; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] == nums[j] && (i*j) % k == 0) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

function countPairs(nums: number[], k: number): number {
    return countHelper(nums, k, 0 , 1);  
};

function satPairs(nums: number[], k: number, a: number, b: number) {
    return nums[a] == nums[b] && (a*b) % k == 0
}

function countHelper(nums: number[], k: number, start: number, stop: number): number {
    //console.log(start, stop);
    if(!(k >0 )) {
       throw new Error("K <= 0, k = "+k)
     }
    if(!(start <= stop && start <= nums.length /*&& stop <= nums.length) */)) {
        throw new Error(`indexes are out of bound ${start}, ${stop} >=? ${nums.length}`)
    }
    
    if (start > stop || start == nums.length) {
        return 0;
    }else if(stop < nums.length) {
        return satPairs(nums, k, start, stop) ? 1 + countHelper(nums, k, start, stop+1) : countHelper(nums, k, start, stop+1)
    }else{
        return countHelper(nums, k, start+1, start+2)
    }
}