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

function longestPalindrome(s: string): number {
    let smset = toMultiset(s);
    let length = 0;
    let odds = [];
    for(let count of smset.values()) {
        if(count % 2 == 0) {
            length += count;
        }else {
            odds.push(count);
        }
    }
    if(odds.length > 0) {
      odds.sort();
      length += odds.pop();
      length += odds.reduce((total, x) => total+x-1, 0);
    }

    return length;
};