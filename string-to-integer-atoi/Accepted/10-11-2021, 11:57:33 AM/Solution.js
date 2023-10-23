// https://leetcode.com/problems/string-to-integer-atoi

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  const expr = /[ ]*([-+]?\d*)/;
  let result = expr.exec(s);
  let match = result[1];
  if(!result) {
    return 0;
  }
  let isNegative = false;
  let num = 0;
  if(match[0]=="-") {
    isNegative=true;
  }
  for(let i=0; i < match.length; i++) {
    if(/\d/.test(match[i])) {
      let a = parseInt(match[i]);
      num = num * 10 + a;
    } 
  }
  if(isNegative) {
    num = 0-num;
  }
  if(num > Math.pow(2,31)-1) {
    return Math.pow(2,31)-1;
  }else if (num < -Math.pow(2,31)) {
    return -Math.pow(2,31);
  }
  return num;

};