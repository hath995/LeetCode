// https://leetcode.com/problems/longest-palindrome

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

function longestPalindrome(s: string): number {
    let smset = toMultiset(s);
    let length = 0;
    let odd = false;
    for(let [letter, count] of smset.entries()) {
        if(count % 2 == 0) {
            length += count;
        }else if(!odd) {
            length +=1;
            odd = true;
        }
    }
    return length;
};