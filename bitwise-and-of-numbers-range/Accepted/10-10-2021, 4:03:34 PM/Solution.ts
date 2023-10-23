// https://leetcode.com/problems/bitwise-and-of-numbers-range

function rangeBitwiseAnd(left: number, right: number): number {
  if(left == 0 || right == 0 || (left & right) == 0) {
    return 0;
  }
  let result = left;
  let diffLog = Math.log2(right-left);
  if(Number.isFinite(diffLog)) {
    result = result & (~(Math.pow(2, diffLog) - 1));
  }
  
  for(let i = left; i <= right; i++) {
    result = result & i;
    if(result == 0 ) {
      return 0;
    }
  }
  return result;
};