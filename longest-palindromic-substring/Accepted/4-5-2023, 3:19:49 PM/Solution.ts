// https://leetcode.com/problems/longest-palindromic-substring

function isPalindrome(s: string): boolean {
    const length = s.length;
    const halfLength = length >> 1;
    if(s.length == 1) return true;
    for(let i = 0; i < halfLength; i++) {
        if(s[i] !== s[length - 1 - i]) return false;
    }
    return true;
}

function longestPalindrome(s: string): string {
    if(s.length == 1) return s;
    for(let i = s.length; i > 0; i--) {
        for(let j=0; j+i<=s.length; j++) {
            let slice = s.slice(j,j+i);
            //console.log(i, j, slice, j,j+i);
            if(isPalindrome(slice)) return slice;
        }
    }
    throw new Error("got here:"+s);
};