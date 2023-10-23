// https://leetcode.com/problems/minimum-increment-to-make-array-unique

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function minIncrementForUnique(nums: number[]): number {
    const numsSet: Set<number> = new Set();
    const dupes: Set<number> = new Set();
    let moves = 0;
    for(let i= 0; i < nums.length; i++){

        if(numsSet.has(nums[i])){
            dupes.add(nums[i]);
        }
        numsSet.add(nums[i]);

    }
    for(let elem of dupes) {
        let num = elem;
        while(numsSet.has(num)) {
            num++;
            moves++;
        }
        numsSet.add(num);
    }
    return moves;
};