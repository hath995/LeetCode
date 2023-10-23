// https://leetcode.com/problems/bitwise-and-of-numbers-range

//function rangeBitwiseAnd(left: number, right: number): number {
//  if(left == 0 || right == 0 || (left & right) == 0) {
//    return 0;
//  }
//  let result = left;
//  let diff = right-left;
//  let diffLog = Math.ceil(Math.log2(diff));
//  if(Number.isFinite(diffLog)) {
//    let remaining = left & (~(Math.pow(2,diffLog)-1));
//    if((remaining&~(remaining-1)) < Math.pow(2, diffLog)) {
//      return 0
//    }
//  }
//  let increment = 1;
//  //if(Number.isFinite(diffLog)) {
//  //  result = result & (~(Math.pow(2, diffLog) - 1));
//  //  increment = Math.pow(2,diffLog)
//  //}
//  
//  for(let i = left; i <= right; i+=increment) {
//    result = result & i;
//    if(result == 0 ) {
//      return 0;
//    }
//  }
//  return result;
//};
//function rangeBitwiseAnd(left: number, right: number): number {
//  if(left == 0 || right == 0 ) {
//    return 0;
//  }
//  if(left.toString(2).length !== right.toString(2).length) {
//    return 0
//  }else{
//    const pref = 1 << (left.toString(2).length-1);
//    return pref ^ rangeBitwiseAnd(left - pref, right - pref);
//  }
//};

//function rangeBitwiseAnd(left: number, right: number): number {
//  if(left == 0 || right == 0 ) {
//    return 0;
//  }
//  
//  let result = 0;
//  while(left !== 0) {
//  if(right == 0 ) {
//    left = 0 
//  }else if(left.toString(2).length !== right.toString(2).length) {
//    left = 0;
//  }else{
//    const pref = 1 << (left.toString(2).length-1);
//    result =  pref ^ result;
//      //rangeBitwiseAnd(left - pref, right - pref);
//    left-=pref;
//    right-=pref;
//  }
//  }
//  return result;
//};
function rangeBitwiseAnd(left: number, right: number): number {
  let count = 0;
  while (left != right) {
    left = left >> 1;
    right = right >> 1;
    count++;
  }
  return left << count;
}