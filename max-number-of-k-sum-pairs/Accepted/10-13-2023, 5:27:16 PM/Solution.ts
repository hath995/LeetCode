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
        let keycard = ms.get(key), complcard = ms.get(compl);
        // while((keycard = ms.get(key), keycard > 0) && (key !== compl || keycard > 1) && ( key === compl || (complcard = ms.get(compl), complcard !== undefined && complcard > 0))) {
        //     count++;
        if(key == compl) {
            let c = Math.floor(keycard/2);
            // console.log(c, keycard, complcard)
            count += c;
            ms.set(key, keycard-c);
        }else if (complcard !== undefined) {
            let c = Math.min(keycard, complcard);
            // console.log(c, keycard, complcard)
            count += c;
            ms.set(key, keycard-c);
            ms.set(compl, complcard-c);
        }
        // }
    }
    return count;
};