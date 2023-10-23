// https://leetcode.com/problems/merge-strings-alternately

function mergeAlternately(word1: string, word2: string): string {
    // let result = [];
    // let length = Math.min(word1.length, word2.length)*2;
    // //abc
    // //pqr xxx
    // //abcpqrxxx
    // let left = 0, right = 0;
    // for(let i = 0; i < length; i++) {
    //     result[i] = i % 2 === 0 ? word1[left++] : word2[right++];
    //     //[a,p,b,q,c,r]
    // }
    // if(word1.length > word2.length) {
    //     result = result.concat(word1.slice(left));
    // }else if(word1.length < word2.length){
    //     result = result.concat(word2.slice(right));
    // }
    // return result.join("");
    // const result = new Array(word1.length+word2.length).fill("");
    // for(let i = 0,left = 0, right = 0; i < word1.length+word2.length; i++) {
    //     result[i] = i % 2 == 0 && left < word1.length || right >= word2.length && left < word1.length ? word1[left++] : word2[right++];
    // }
    // return result.join("");
    
    let left = 0, right = 0;
    return new Array(word1.length+word2.length).fill("").reduce((result, x, i) => result + (i % 2 == 0 && left < word1.length || right >= word2.length && left < word1.length ? word1[left++] : word2[right++]),"");
};