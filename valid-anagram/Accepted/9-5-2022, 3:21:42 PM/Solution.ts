// https://leetcode.com/problems/valid-anagram

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

function msetEqual(s: Map<string, number>, t: Map<string, number>): boolean {
    
    for(let [lchar,] of s) {
        if(!(s.get(lchar) === t.get(lchar))) {
            return false;
        }
    }
    
    for(let [rchar,] of t) {
        if(!(s.get(rchar) === t.get(rchar))) {
            return false;
        }
    }
    
    return true;
}

function isAnagram(s: string, t: string): boolean {
    return msetEqual(toMultiset(s), toMultiset(t));
};