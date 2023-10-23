// https://leetcode.com/problems/palindrome-number

function isPalindrome(x: number): boolean {
    return parseInt(x.toString().split("").reverse().join("")) == x
};