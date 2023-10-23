// https://leetcode.com/problems/balanced-binary-tree

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

function isBalanced(root: TreeNode | null): boolean {
    function height(root: TreeNode | null): number {
        let result = root === null ? 0 : 1+Math.max(height(root.left), height(root.right));
        //console.log("height", root, result);
        return result
    }

    function balance(root: TreeNode | null): number {
        let result = root === null ? 0 : height(root.left) - height(root.right);
        //console.log("balance", root, result);
        return result
    }
    let bf: number;
    return (bf = balance(root), bf >= -1 && bf <= 1);
};