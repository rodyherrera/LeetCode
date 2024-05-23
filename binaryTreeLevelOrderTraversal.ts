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

const levelOrder = (root: TreeNode | null): number[][] => {
    if(root === null) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    while(queue.length > 0){
        const currentLevelValues: number[] = [];
        const levelSize = queue.length;
        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()!;
            currentLevelValues.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        result.push(currentLevelValues);
    }
    return result;
};