// https://leetcode.com/problems/diameter-of-binary-tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function diameter(node: TreeNode | null): [number, number] {
  if(node == null) {
    return [-1,-1];
  }
  if(node.left == null && node.right == null) {
    return [0, 0];
  }
  let leftDiameter = diameter(node.left);
  let rightDiameter = diameter(node.right);
  let height = Math.max(leftDiameter[0],rightDiameter[0]) + 1;
  let dim = leftDiameter[0]+rightDiameter[0]+2;
  let maxDiameter = Math.max(leftDiameter[1], rightDiameter[1], dim);
  return [height, maxDiameter];
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  return diameter(root)[1];
};