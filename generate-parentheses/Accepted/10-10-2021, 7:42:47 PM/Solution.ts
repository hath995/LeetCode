// https://leetcode.com/problems/generate-parentheses

function star(s, num) {
  let m = new Array(num);
  m.fill(s);
  return m.join("");
}
function* genItem(stack: string[], open: number, left: number) {
  if(left == 0) {
    yield stack.concat(star(")",open)).join("");
    return;
  }
  yield *genItem(stack.slice().concat(["("]), open+1, left-1);
  if(open > 0) {
    yield *genItem(stack.slice().concat([")"]), open-1, left);
  }
}
function generateParenthesis(n: number): string[] {
  let result: string[] = Array.from(genItem([],0,n));
  return result;
};