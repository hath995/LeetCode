// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letters = new Set([]);
    let longest = 0;
    let current = 0;
    foo: for(let j = 0; j < s.length; j++) {
        for(let i = j; i < s.length; i++) {
            if(letters.has(s[i])) {
                if(current > longest) {
                    longest = current    
                }
                //console.log(letters, j,i, current);
                letters = new Set([]);
                current = 0;
                j=i-1
                continue foo;
                
            }else{
                letters.add(s[i]);
                current++;
            }
        }
    }
    if(current > longest) {
        longest = current
    }
    return longest
};