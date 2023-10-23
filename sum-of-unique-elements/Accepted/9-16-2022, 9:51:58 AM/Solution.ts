// https://leetcode.com/problems/sum-of-unique-elements


function difference<A>(setA: Set<A>, setB: Set<A>): Set<A> {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function sumOfUnique(nums: number[]): number {
    let elems: Set<number> = new Set();
    let dupes: Set<number> = new Set();
    let result = 0;
    for(let elem of nums) {
        if(elems.has(elem)) {
            dupes.add(elem);
        }
        elems.add(elem);
    }
    
    let uniques = difference(elems, dupes);
    for(let elem of uniques) {
        result += elem;
    }
    return result;
};