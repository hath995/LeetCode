// https://leetcode.com/problems/valid-palindrome

function isPalindrome(s: string): boolean {
    const normalized = s.split("").filter(l => /[0-9a-zA-Z]/.test(l)).join("").toLowerCase();
    
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