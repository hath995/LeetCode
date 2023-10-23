// https://leetcode.com/problems/leaf-similar-trees

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

function *leafs(root: TreeNode | null): IterableIterator<number> {
    if(root === null) return null;
    if(root.left === null && root.right === null) yield root.val;
    yield * leafs(root.left);
    yield * leafs(root.right);
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
   let l1 = leafs(root1);
   console.log(Array.from(leafs(root1)));
   let l2 = leafs(root2);
   console.log(Array.from(leafs(root2)));
   let left, right;
   while((left = l1.next(), right = l2.next(), left.value == right.value && left.done !== true && right.done !== true )) {}
   return left.value === right.value && left.done === right.done;
};