// https://leetcode.com/problems/sum-of-unique-elements

/**
 * @param {number[]} nums
 * @return {number}
 */

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function sumOfUnique(nums) {
    let elems = new Set();
    let dupes = new Set();
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