// https://leetcode.com/problems/reverse-integer

function reverse(x: number): number {
  let result = 0;
  let z = x > 0 ? x : -x;
  while(z > 0) {
    let mz = z%10;
    let zp = (z-mz)/10;
    result += mz;
    //if(Math.floor(z/10) > 0) {
    if(zp > 0) {
      result *= 10;
    }
    z = zp;
  }
  if(x < 0) {
    result = 0-result;
  }
  if(result > Math.pow(2,31)-1 || result < -Math.pow(2,31)) {
    return 0;
  }
  return result;
};