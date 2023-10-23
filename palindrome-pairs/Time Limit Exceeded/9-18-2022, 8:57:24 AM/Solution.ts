// https://leetcode.com/problems/palindrome-pairs

function palindromePairs(words: string[]): number[][] {
    let pairIndex = [];
    const n = words.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
           if(i == j) continue;
           let s = words[i] + words[j];
           let palindrome = true;
           for(let k = 0; k < s.length/2; k++){
               if(s[k] !== s[s.length - k -1]) {
                   palindrome = false;
               }
           }
           if(palindrome) {
               pairIndex.push([i,j]);
           }
        }
    }
    return pairIndex;
};