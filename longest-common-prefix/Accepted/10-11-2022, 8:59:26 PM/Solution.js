// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //let minl = Math.min(...strs.map(s => s.length));
    //let minl = strs.reduce((l,s) => s.length < l ? s.length : l, strs[0].length);
    let minl = strs[0].length;
    let prefix = "";
    let n = strs.length;
    let hasPrefix = true;
    for(let i = 0; i < minl; i++) {
       let allCurMatch = true;
       for(let k = 0; k < n; k++) {
           if (strs[k][i] !== strs[0][i]) {
               allCurMatch = false; 
               
               break;
           }
       } 
       if(allCurMatch) {
           prefix += strs[0][i];
       }else{
           break;
       }
    }
    return prefix;
};