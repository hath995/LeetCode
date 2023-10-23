// https://leetcode.com/problems/symmetric-tree

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
function isSymmetricHelper(left: TreeNode | null, right: TreeNode | null): boolean {
    if ( left === null && right === null) return true
    return left !== null && right !== null && left.val === right.val && isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
    if ( root == null || root.left === null && root.right === null) return true;

    return isSymmetricHelper(root.left, root.right);
};