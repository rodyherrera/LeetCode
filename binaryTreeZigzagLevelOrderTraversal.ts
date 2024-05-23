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


const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
    if(!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let level = 0;
    while(queue.length){
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()!;
            currentLevel.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(level % 2 === 1){
            currentLevel.reverse();
        }
        result.push(currentLevel);
        level++;
    }
    return result;
};