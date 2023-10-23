// https://leetcode.com/problems/merge-strings-alternately

function mergeAlternately(word1: string, word2: string): string {
    // let result = [];
    // let length = Math.min(word1.length, word2.length)*2;
    // let left = 0, right = 0;
    // for(let i = 0; i < length; i++) {
    //     result[i] = i % 2 == 0 ? word1[left++] : word2[right++];
    // }
    // if(word1.length > word2.length) {
    //     result = result.concat(word1.slice(left));
    // }else if(word1.length < word2.length){
    //     result = result.concat(word2.slice(right));
    // }
    // return result.join("");
    const result = new Array(word1.length+word2.length);
    const n = word1.length, m = word2.length, length = m + n;
    let left = 0, right = 0;
    for(let i = 0; i < m+n; i++) {
        if(i % 2 == 0 && left < n || right >= m && left < n) {
            result[i] = word1[left++];
        }else if(i % 2 == 1 && right < m || left >= n && right < m) {
            result[i] = word2[right++];
        }
    }
    return result.join("");
};