// https://leetcode.com/problems/perfect-squares

function numSquares(n: number): number {
  const nroot = Math.floor(Math.sqrt(n));
  let nums=[];
  let sqs=[];
  for(let i=0; i<=n; i++) {
    nums[i*i] = 1;
    if(i!==0 && i*i < n) sqs.push(i*i);
    if(nums[i] !== 1) {
      let sum = i;
      let steps = 0;
      let sqi = sqs.length-1;
      while(sum !==0 && steps <= n) {
        while(sqs[sqi] > i) {
          sqi--;
        }
        //console.log(i, sum, sqi, sqs[sqi])
        let greedy = sqs[sqi];
        if(sqs.length == 1 || nums[i-sqs[sqi-1]] == undefined) {
          sum -= greedy;
          steps += nums[sqs[sqi]];
        }else if(nums[i-greedy]+1 <= nums[i-sqs[sqi-1]]+1) {
          steps = 1 + nums[i-greedy];
          sum  = 0;
        }else{
          steps = 1 + nums[i-sqs[sqi-1]];
          sum  = 0;
        }
      
      }
      nums[i] = steps; 
    }
  }
  //console.log(nums); 
  return nums[n];
};
//Math.min(nums[i-greedy]+1, nums[i-greedy2]+1);
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
//[1,1,2,3,1,2,3,4,2,1,2 ,3 ,3 ,2 ,3, 4, 1]