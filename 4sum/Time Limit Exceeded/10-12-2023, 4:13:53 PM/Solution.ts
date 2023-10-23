// https://leetcode.com/problems/4sum

type tuples = [number, number, number, number];

function toS(tuple: tuples): string {
    return tuple.toString();
}

function T(t: tuples, nums: number[]): tuples {
   return [nums[t[0]] , nums[t[1]] , nums[t[2]] , nums[t[3]]]
}

function toMultiset(s: number[]): Map<number, number> {
    const s_mset: Map<number, number> = new Map();
    for(let char of s) {
        if(s_mset.has(char)) {
            s_mset.set(char, s_mset.get(char)+1);
        }else{
            s_mset.set(char, 1);
        }
    }
    return s_mset;
}

function restrictedList(nums: number[]): number[] {
    let result = [];
    let ms = toMultiset(nums);
    for(let [num, count] of ms.entries()) {
        for(let i=0; i< count && i < 4; i++) {
            result.push(num);
        }
    }
    return result;
}

function inc(t: tuples, n: number) {
    if(t[3] == n-1) {
        if(t[2] == n-2) {
            if(t[1]==n-3) {
                t[0]++;
                t[1] = t[0]+1;
                t[2] = t[1]+1;
                t[3] = t[2]+1;
            }else{
                t[1]++;
                t[2] = t[1]+1;
                t[3] = t[2]+1;
            }
        }else{
            t[2]++;
            t[3] = t[2]+1;
        }
    }else{
        t[3]++;
    }
}

function isTarget(nums: number[], t: tuples, n: number): boolean {
    return n == (nums[t[0]] + nums[t[1]] + nums[t[2]] + nums[t[3]])
}

function lessThan(t: tuples, r: tuples): boolean {
    // return t[0] < r[0] && t[1] <= r[1] && t[2] <= r[2] && t[3] <= r[3]
    return t[0] < r[0]
}

function fourSum(nums: number[], target: number): number[][] {
    let mums = restrictedList(nums);
    console.log(mums);
    const end: tuples = [mums.length-3, mums.length-3, mums.length-2, mums.length-1]
    const sort = (a,b) => a-b;
    let setOfTuples: Set<string> = new Set();
    let result = [];
    let tuple: tuples = [0,1,2,3];
    while(lessThan(tuple, end)) {
        let ts = toS(T(tuple, mums).sort(sort));
        if(!setOfTuples.has(ts)) {
            if(isTarget(mums, tuple, target)) {
                setOfTuples.add(ts);
                result.push(T(tuple, mums));
            }
        }
        inc(tuple, mums.length);
        //console.log(tuple)
    }
    return result;
};