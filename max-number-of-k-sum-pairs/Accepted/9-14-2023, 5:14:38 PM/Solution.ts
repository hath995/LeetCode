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
        const compl = k-key
        let keycard = 0, complcard = 0;;
        while((keycard = ms.get(key), keycard > 0) && (key !== compl || keycard > 1) && ( key === compl || (complcard = ms.get(compl), complcard !== undefined && complcard > 0))) {
            count++;
            if(key == compl) {
                ms.set(key, keycard-2);
            }else{
                ms.set(key, keycard-1);
                ms.set(compl, complcard-1);
            }
        }
    }
    return count;
};