// https://leetcode.com/problems/longest-palindromic-substring

function isPalindrome(s: string): boolean {
    const length = s.length;
    const halfLength = length >> 1;
    for(let i = 0; i <= length; i++) {
        if(s[i] !== s[length - 1 - i]) return false;
    }
    return true;
}

function longestPalindrome(s: string): string {
    for(let i = s.length - 1; i > 0; i--) {
        for(let j=0; j+i<s.length; j++) {
            let slice = s.slice(j,j+i);
            if(isPalindrome(slice)) return slice;
        }
    } 
};