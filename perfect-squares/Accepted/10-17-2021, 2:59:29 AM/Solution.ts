// https://leetcode.com/problems/perfect-squares

function numSquares(n: number): number {
  let nums=[];
  let sqs=[];
  for(let i=0; i<=n; i++) {
    if (i*i <= n) nums[i*i] = 1;
    if(nums[i] !== 1) {
      //console.log(sqs);
      let steps = sqs.reduce((best, cur)  => Math.min(best, i % cur == 0 ? i/cur : nums[i-Math.floor(i/cur)*cur]+Math.floor(i/cur)), Infinity)
      nums[i] = steps; 
    }else{
      if(i>0) sqs.push(i);
    }
    //console.log(i,sqs); 
    //console.log(nums); 
  }
  //console.log(nums); 
  return nums[n];
};