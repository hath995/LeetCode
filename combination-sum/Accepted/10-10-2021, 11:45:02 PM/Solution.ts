// https://leetcode.com/problems/combination-sum

function combinationSum(candidates: number[], target: number): number[][] {
  return Array.from(candidateGen(candidates, [], 0, target));
};

function *candidateGen(candidates: number[], acc: number[], sum: number, target: number) {
  //console.log("candidates",candidates,"ACC",acc)
  if(sum == target) {
    yield acc;
  }else if(sum < target) {
    for(let i = 0; i< candidates.length; i++) {
      if(i==0) {
        yield * candidateGen(candidates, acc.slice().concat([candidates[i]]), sum+candidates[i], target);
      }else{
        yield * candidateGen(candidates.slice(i), acc.slice().concat([candidates[i]]), sum+candidates[i], target);
      }
    }
  }
}