// https://leetcode.com/problems/validate-binary-search-tree

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

function isValidBST(root: TreeNode | null): boolean {
    return validBst(root, -Infinity, Infinity);
        
};

function validBst(root: TreeNode | null, minVal: number, maxVal: number): boolean {
   if(root == null) return true;
   if(root.val >= maxVal || root.val <= minVal) return false;
   return validBst(root.left, minVal, root.val) && validBst(root.right, root.val, maxVal);
}