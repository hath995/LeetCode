// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root == null) return null;
    
    if(root == p) return p;

    if(root == q) return q;

    let leftBranch = lowestCommonAncestor(root.left, p, q);
    let rightBranch = lowestCommonAncestor(root.right, p, q);
    if(leftBranch !== null && rightBranch !== null) {
        return root;
    }
    if(leftBranch) return leftBranch;
    if(rightBranch) return rightBranch;

    return null	
};