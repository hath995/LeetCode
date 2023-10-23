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

function isPalindrome2(s: string, start: number, length: number): boolean {
    const halfLength = length >> 1;
    if(length == 1) return true;
    for(let i = 0; i < halfLength; i++) {
        if(s[start+i] !== s[(start+length) - 1 - i]) return false;
    }
    return true;
}



function longestPalindrome(s: string): string {
    if(s.length == 1) return s;
    for(let i = s.length; i > 0; i--) {
        for(let j=0; j+i<=s.length; j++) {
            //let slice = s.slice(j,j+i);
            //console.log(i, j, slice, j,j+i);
            if(isPalindrome2(s, j, i)) return s.slice(j, j+i);
        }
    }
    throw new Error("got here:"+s);
};