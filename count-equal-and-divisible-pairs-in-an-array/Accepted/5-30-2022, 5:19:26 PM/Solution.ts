// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array

//function countPairs(nums: number[], k: number): number {
//    let count = 0;
//    for(let i = 0; i < nums.length-1; i++) {
//        for(let j = i+1; j < nums.length; j++) {
//            if(nums[i] == nums[j] && (i*j) % k == 0) {
//                count++;
//            }
//            console.log(i, j, count);
//        }
//    }
//    return count;
//};

//function countPairs(nums: number[], k: number): number {
//    return countHelper(nums, k, 0 , 1);  
//};

function countPairs(nums: number[], k: number): number {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result += countSeqSlice(nums, k, i, i+1);
    }
    return result;
};

function satPairs(nums: number[], k: number, a: number, b: number) {
    return nums[a] == nums[b] && (a*b) % k == 0
}

function countHelper(nums: number[], k: number, start: number, stop: number): number {
    if(!(k >0 )) {
       throw new Error("K <= 0, k = "+k)
     }
    if(!(start <= stop && start <= nums.length /*&& stop <= nums.length) */)) {
        throw new Error(`indexes are out of bound ${start}, ${stop} >=? ${nums.length}`)
    }
    
    if (start > stop || start == nums.length) {
        return 0;
    }else if(stop < nums.length) {
        let result = satPairs(nums, k, start, stop) ? 1 + countHelper(nums, k, start, stop+1) : countHelper(nums, k, start, stop+1);
        console.log(start, stop,  result);
        return result
    }else{
        let result = countHelper(nums, k, start+1, start+2);
        console.log(start, stop, result);
        return  result
    }
}

function countSeqSlice(nums: number[], k: number, start: number, stop: number): number {
    if(start >= stop || stop >= nums.length) {
        return 0;
    }
    return satPairs(nums, k, start, stop) ? 1 + countSeqSlice(nums, k, start, stop+1) : countSeqSlice(nums, k, start, stop+1);
}