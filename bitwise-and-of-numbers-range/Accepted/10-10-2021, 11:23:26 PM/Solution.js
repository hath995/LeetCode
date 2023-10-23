// https://leetcode.com/problems/bitwise-and-of-numbers-range

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeBitwiseAnd(left, right) {
  let count = 0;
  while (left != right) {
    left = left >> 1;
    right = right >> 1;
    count++;
  }
  return left << count;
}