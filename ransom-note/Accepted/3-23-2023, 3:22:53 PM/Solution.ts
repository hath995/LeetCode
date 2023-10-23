// https://leetcode.com/problems/ransom-note

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

function msetSubset(s: Map<string, number>, t: Map<string, number>): boolean {
    for(let [lchar,] of s) {
        if(!(s.get(lchar) <= t.get(lchar))) {
            return false;
        }
    }
    return true;
}
function canConstruct(ransomNote: string, magazine: string): boolean {
    return msetSubset(toMultiset(ransomNote), toMultiset(magazine))
};