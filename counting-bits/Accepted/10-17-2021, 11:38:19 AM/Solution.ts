// https://leetcode.com/problems/counting-bits

function countBits(n: number): number[] {
  let result: number[] = new Array(n+1);
  result.fill(0);
  for(let i = 0; i<=n; i++) {
    let curI = i;
    for(let k=0; k < 54; k++) {
      if((curI & 1) == 1) result[i]++;
      curI = curI >> 1;
    }
  }
  return result;
};