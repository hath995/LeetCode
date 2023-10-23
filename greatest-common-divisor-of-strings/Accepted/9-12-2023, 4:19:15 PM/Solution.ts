// https://leetcode.com/problems/greatest-common-divisor-of-strings

function gcd(a,b) {
    while(a != b) {
        if(a > b) {
            a -= b;
        }else{
            b -= a;
        }
    }
    return a;
}

function gcdOfStrings(str1: string, str2: string): string {
    let minString = str1.length < str2.length ? str1 : str2;
    const n = str1.length, m = str2.length;
    // br: for(let i=minString.length; i > 0; i--) {
    //     const slice = minString.slice(0,i);
    //     if(n % i == 0 && m % i == 0) {
            
    //         // for(let k = 0; k < n/i; k++) {
    //         //     if(str1.slice(i*k,i*(k+1)) != slice) {
    //         //         continue br;
    //         //     }
    //         // }
    //         // for(let k = 0; k < m/i; k++) {
    //         //     if(str2.slice(i*k,i*(k+1)) != slice) {
    //         //         continue br;
    //         //     }
    //         // }

    //         // if(str1 != slice.repeat(n / i) || str2 != slice.repeat(m / i)) {
    //         // console.log(`(${slice}){${n/i}}`, `(${slice}){${m/i}}`, new RegExp(`(${slice}){${n/i}}`).test(str1), new RegExp(`(${slice}){${m/i}}`).test(str2))
    //         if(!new RegExp(`(${slice}){${n/i}}`).test(str1) || !new RegExp(`(${slice}){${m/i}}`).test(str2)) {
    //             continue br;
    //         }
    //         return slice;
    //     }
    // }
    // return "";
    return str1 + str2 != str2+str1 ? "" : str1.slice(0, gcd(n,m))
};