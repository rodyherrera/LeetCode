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

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    if(nums.length === 0) return null;
    const buildBST = (start: number, end: number): TreeNode | null => {
        if(start > end) return null;
        const middle = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[middle]);
        node.left = buildBST(start, middle - 1);
        node.right = buildBST(middle + 1, end);
        return node;
    };
    return buildBST(0, nums.length - 1);
};