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

const isSymetric = (root: TreeNode | null): boolean => {
    const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if(left === null && right === null) return true;
        if(left === null || right === null) return false;
        return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    return isMirror(root, root);
};