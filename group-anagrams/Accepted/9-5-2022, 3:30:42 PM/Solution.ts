// https://leetcode.com/problems/group-anagrams

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

function toCanonical(s: string): string {
    return s.split("").sort().join("");
}

function groupAnagrams(strs: string[]): string[][] {
    const anagrams: Map<string, string[]> = new Map(); 
    for(let word of strs) {
        let canon = toCanonical(word);
        if(anagrams.has(canon)) {
            anagrams.set(canon, anagrams.get(canon).concat([word]));
        }else{
            anagrams.set(canon, [word])
        }
    }
    let result = [];
    for(let [canon, wordlist] of anagrams) {
        result.push(wordlist);
    }
    return result;
};