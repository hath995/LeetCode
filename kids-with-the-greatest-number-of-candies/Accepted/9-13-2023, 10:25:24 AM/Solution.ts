// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = Math.max.apply(null, candies);
  return candies.map(x => x+extraCandies >= max);
};