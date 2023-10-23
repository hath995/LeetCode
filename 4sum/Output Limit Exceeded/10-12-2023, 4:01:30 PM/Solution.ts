// https://leetcode.com/problems/4sum

type tuples = [number, number, number, number];

function toS(tuple: tuples): string {
    return tuple.toString();
}

function T(t: tuples, nums: number[]): tuples {
   return [nums[t[0]] , nums[t[1]] , nums[t[2]] , nums[t[3]]]
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
    const end: tuples = [nums.length-3, nums.length-3, nums.length-2, nums.length-1]
    const sort = (a,b) => a-b;
    let setOfTuples: Set<string> = new Set();
    let result = [];
    let tuple: tuples = [0,1,2,3];
    while(lessThan(tuple, end)) {
        if(isTarget(nums, tuple, target)) {
            let ts = toS(T(tuple, nums).sort(sort));
            if(!setOfTuples.has(ts)) {
                setOfTuples.add(ts);
                result.push(T(tuple, nums));
            }
        }
        inc(tuple, nums.length);
        console.log(tuple)
    }
    return result;
};