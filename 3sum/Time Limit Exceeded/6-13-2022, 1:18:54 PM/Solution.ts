// https://leetcode.com/problems/3sum

function threeSum(nums: number[]): number[][] {
    let results = [];
    let triples = {};
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            for(let k = j+1; k < n; k++) {
                if(nums[i]+nums[j]+nums[k]== 0) {
                    let cannonical = [nums[i],nums[j],nums[k]].sort((a,b) => a - b);
                    if(triples?.[cannonical[0]]?.[cannonical[1]]?.[cannonical[2]] === undefined) {
                        results.push([nums[i],nums[j],nums[k]]);
                        if(cannonical[0] in triples) {
                            triples[cannonical[0]][cannonical[1]] = {[cannonical[2]]: true};
                        }else{
                            triples[cannonical[0]] = {[cannonical[1]]: {[cannonical[2]]: true}};
                        }
                        
                    }
                }
            }
        }
    }
    return results;
};