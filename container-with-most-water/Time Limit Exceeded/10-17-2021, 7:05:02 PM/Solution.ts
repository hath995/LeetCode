// https://leetcode.com/problems/container-with-most-water

function maxArea(height: number[]): number {
  //Choose X,Y from Height, st: |(Y-X)|*Math.min(height[Y],height[X]) >= For all a,b in Height: |(a-b)|*Math.min(height[a],height[b])
  //Choose X,Y from Height, st: |(Y-X)|*Math.min(height[Y],height[X]) >= For all a,b in 1..i: |(a-b)|*Math.min(height[a],height[b])
  const n = height.length;
  let maxArea = 0;
  for(let i=0; i < n; i++) {
    for(let k=0; k < i; k++) {
      maxArea = Math.max(maxArea, (i-k)*Math.min(height[i],height[k]));
    }
  }
  return maxArea;
};