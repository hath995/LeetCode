// https://leetcode.com/problems/merge-strings-alternately

function mergeAlternately(word1: string, word2: string): string {
    let result = [];
    let length = Math.min(word1.length, word2.length)*2;
    let left = 0, right = 0;
    for(let i = 0; i < length; i++) {
        result[i] = i % 2 == 0 ? word1[left++] : word2[right++];
    }
    if(word1.length > word2.length) {
        result = result.concat(word1.slice(left));
    }else{
        result = result.concat(word2.slice(right));
    }
    return result.join("");
};