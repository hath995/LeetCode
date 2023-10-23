// https://leetcode.com/problems/count-good-nodes-in-binary-tree

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

 function count(root: TreeNode | null, maxInPath: number): number {
     if (root === null) return 0;
     const max = Math.max(maxInPath, root.val);
     if(root.val >= maxInPath) {
         return 1 + count(root.left, max)+ count(root.right, max);
     }else{
         return  count(root.left, max)+ count(root.right, max);
     }
 }

function goodNodes(root: TreeNode | null): number {
    return count(root, -Infinity)
};