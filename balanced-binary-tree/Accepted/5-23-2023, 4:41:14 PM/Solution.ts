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
        return root === null ? 0 : 1+Math.max(height(root.left), height(root.right));
    }

    function balance(root: TreeNode | null): number {
        return root === null ? 0 : height(root.left) - height(root.right);
    }

    function unifiedBalance(root: TreeNode | null): [number, boolean] {
        if ( root == null) {
            return [0, true];
        } else {
            let left = unifiedBalance(root.left);
            if(!left[1]) {
                return [-1, false];
            }

            let right = unifiedBalance(root.right);
            if(!right[1]) {
                return [-1, false];
            }
            return [1+Math.max(left[0], right[0]), left[1] && right[1] && left[0]-right[0]>=-1 && left[0]-right[0] <= 1];
        }
    }
    //var bf: number;
    //return (bf = balance(root), bf >= -1 && bf <= 1 && (root == null || (isBalanced(root.left) && isBalanced(root.right) ) ) );
    return unifiedBalance(root)[1];
};