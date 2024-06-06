const pathSum = (root: TreeNode | null, targetSum: number): number[][] => {
    const result: number[][] = [];
    // Helper function for depth-first search
    const dfs = (node: TreeNode | null, currentSum: number, path: number[]): void => {
        if(node === null) return;
        // Add current node value to the path
        path.push(node.val);
        currentSum += node.val;
        // Check of current node is a leaf and sums to targetSum
        if(node.left === null && node.right === null && currentSum === targetSum){
            // Add a copy of the path to the result
            result.push([...path]);
        }else{
            // Recusirvely search left and right subtrees
            dfs(node.left, currentSum, path);
            dfs(node.right, currentSum, path);
        }
        // Backtrack by removing the current node values from the path
        path.pop();
    };
    // Start DFS traversal from the root node
    dfs(root, 0, []);
    return result;
};