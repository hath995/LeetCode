// https://leetcode.com/problems/greatest-common-divisor-of-strings

function gcdOfStrings(str1: string, str2: string): string {
    let minString = str1.length < str2.length ? str1 : str2;
    const n = str1.length, m = str2.length;
    br: for(let i=minString.length; i > 0; i--) {
        const slice = minString.slice(0,i);
        if(n % i == 0 && m % i == 0) {
            for(let k = 0; k < n/i; k++) {
                if(str1.slice(i*k,i*(k+1)) != slice) {
                    continue br;
                }
            }
            for(let k = 0; k < m/i; k++) {
                if(str2.slice(i*k,i*(k+1)) != slice) {
                    continue br;
                }
            }
            return slice;
        }
    }
    return "";
};