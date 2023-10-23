// https://leetcode.com/problems/valid-palindrome

function isPalindrome(s: string): boolean {
    const letters = /[^0-9a-zA-Z]/;
    const normalized = s.split(letters).join("").toLowerCase();
    
    const length = normalized.length;
    const hl = length >> 1;
    for(let i = 0; i < hl; i++) {
        if(normalized[i] !== normalized[length-i-1]) {
            return false;
        }
    }
    return true
};