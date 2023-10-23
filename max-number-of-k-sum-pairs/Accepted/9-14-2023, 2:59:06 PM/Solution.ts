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
        const compl = k-key;
        while(ms.get(key) > 0 && ms.get(compl) != undefined && ms.get(compl) > 0) {
            if(key === compl && ms.get(key) <= 1) break;
            count++;
            ms.set(key, ms.get(key)-1);
            ms.set(compl, ms.get(compl)-1);
        }
    }
    return count;
};