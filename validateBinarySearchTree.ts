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

const isValidBST = (root: TreeNode | null): boolean => {
    let prev: number | null = null;
    const inorderTraversal = (node: TreeNode | null): boolean => {
        if(node === null) return true;
        if(!inorderTraversal(node.left)) return false;
        if(prev !== null && node.val <= prev) return false;
        prev = node.val;
        return inorderTraversal(node.right);
    };
    return inorderTraversal(root);
};