// https://leetcode.com/problems/is-subsequence

function toMultiset(s: string): Map<string, number> {
    const s_mset: Map<string, number> = new Map();
    for(let char of s) {
        if(s_mset.has(char)) {
            s_mset.set(char, s_mset.get(char)+1);
        }else{
            s_mset.set(char, 1);
        }
    }
    return s_mset;
}

function msetLTE(s: Map<string, number>, t: Map<string, number>): boolean {
    
    for(let [lchar,] of s) {
        if(!(s.get(lchar) <= t.get(lchar))) {
            return false;
        }
    }
    
    return true;
}

function isSubsequence(s: string, t: string): boolean {
    let left = toMultiset(s);
    let right = toMultiset(t);
    if(!msetLTE(left, right)) {
        return false
    }
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