// https://leetcode.com/problems/count-the-number-of-consistent-strings

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    return words.map(x => new Set(x)).filter(letterSets => {
        for(let letter of letterSets) {
            if(!allowedSet.has(letter)) return false
        }
        return true
            
            
    }).length;
    
};