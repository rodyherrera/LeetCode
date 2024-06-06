const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
    // If the current node is null, return false as there is no path
    if(root === null) return false;
    // Subtract the current node's value from the target sum
    targetSum -= root.val;
    // Check if the current node is a leaf and the target sum has been achivied
    if(root.left === null && root.right === null) return targetSum === 0;
    // Recursively check the left and right subtrees
    // Return true if any subtree has a path sum equal to the target sum
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};