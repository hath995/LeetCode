// https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
  let stack = [];
  let matching = {
    ")":"(",
    "}":"{",
    "]":"["
  }
  for(let i = 0; i < s.length; i++) {
   if(/[([{]/.test(s[i])) {
     stack.push(s[i]);
   }else{
     if(stack[stack.length-1] != matching[s[i]]) {
       return false;
     }else{
       stack.pop();
     }
   }
  }
  return stack.length == 0;
};