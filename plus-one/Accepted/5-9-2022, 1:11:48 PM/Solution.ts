// https://leetcode.com/problems/plus-one

function plusOne(digits: number[]): number[] {
    let carry = 1;
    let result = [];
    for(let i = 0; i < digits.length; i++) {
        let sum = 0;
        if(digits[digits.length-i-1] == 9 && carry == 1) {
            carry = 1;
        }else{
            sum = digits[digits.length-i-1] + carry;
            carry = 0;
        }
        result.push(sum);
    }
    if(carry === 1) result.push(carry)
    return result.reverse();
};