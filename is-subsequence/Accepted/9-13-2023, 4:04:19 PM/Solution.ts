// https://leetcode.com/problems/is-subsequence

function isSubsequence(s: string, t: string): boolean {
    let tindex = 0;
    outer: for(let i = 0; i < s.length; i++) {
        for(let k=tindex; k < t.length; k++) {
            if(t[k] == s[i]) {
                tindex = k+1;
                continue outer;
            }
        }
        return false
    }
    return true;

};