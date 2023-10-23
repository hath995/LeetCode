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
 function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0;
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
};

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(root == null) return 0;
    return root.right !== null && root.left != null ? maxDepth(root.left)+maxDepth(root.right)+1 : Math.max(maxDepth());
};