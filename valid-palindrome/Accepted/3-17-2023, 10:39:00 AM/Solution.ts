// https://leetcode.com/problems/valid-palindrome

function isPalindrome(s: string): boolean {
    const letters = /[^0-9a-zA-Z]/;
    const normalized = s.split(letters).join("").toLowerCase();
    
    const length = normalized.length;
    const hl = Math.floor(length/2);
    //console.log(normalized, length, hl)
    for(let i = 0; i < hl; i++) {
        //console.log(i, normalized[i],length-i-1,normalized[length-i-1] )
        if(normalized[i] !== normalized[length-i-1]) {
            return false;
        }
    }
    return true
};