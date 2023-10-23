// https://leetcode.com/problems/bitwise-and-of-numbers-range

function rangeBitwiseAnd(left: number, right: number): number {
  if(left == 0 || right == 0) {
    return 0;
  }
  let result = left;
  for(let i = left; i <= right; i++) {
    result = result & i;
    if(result == 0 ) {
      return 0;
    }
  }
  return result;
};