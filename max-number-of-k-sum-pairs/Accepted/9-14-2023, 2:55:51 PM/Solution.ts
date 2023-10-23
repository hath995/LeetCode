// https://leetcode.com/problems/max-number-of-k-sum-pairs

function toMultiset(s: number[]): Map<number, number> {
    const s_mset: Map<number, number> = new Map();
    for(let num of s) {
        if(s_mset.has(num)) {
            s_mset.set(num, s_mset.get(num)+1);
        }else{
            s_mset.set(num, 1);
        }
    }
    return s_mset;
}

function maxOperations(nums: number[], k: number): number {
    let ms = toMultiset(nums);
    let count = 0;
    for(let key of ms.keys()) {
        while(ms.get(key) > 0 && ms.get(k-key) != undefined && ms.get(k-key) > 0) {
            if(key === k-key && ms.get(key) <= 1) break;
            count++;
            ms.set(key, ms.get(key)-1);
            ms.set(k-key, ms.get(k-key)-1);
        }
    }
    return count;
};