// https://leetcode.com/problems/max-number-of-k-sum-pairs

function toMultiset(s: number[]): Map<number, number> {
    const s_mset: Map<number, number> = new Map();
    for(let num of s) {
        let count = s_mset.get(num);
        if(count !== undefined) {
            s_mset.set(num, count+1);
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
        let keycard = ms.get(key), complcard;
        if(key == compl) {
            count += keycard >> 1;
        }else if ((complcard = ms.get(compl),complcard !== undefined && complcard > 0)) {
            let c = Math.min(keycard, complcard);
            count += c;
            ms.set(key, keycard-c);
            ms.set(compl, complcard-c);
        }
    }
    return count;
};