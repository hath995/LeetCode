// https://leetcode.com/problems/palindrome-number

function isPalindrome(x: number): boolean {
    //return parseInt(x.toString().split("").reverse().join("")) == x
    let num = [];
    if (x<0) return false
    while(x>0) {
        num.push(x%10);
        x = (x-(x%10))/10;
    }
    for(let k=0; k <= num.length/2; k++) {
        if(num[k] !== num[num.length-k-1]) {
            return false
        }
    }
    return true;
};