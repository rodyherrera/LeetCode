const isBalanced = (root: TreeNode | null): boolean => {
    // Helper function to check the height of each subtree
    const checkHeight = (node: TreeNode | null): number => {
        // An empty tree is balanced and its height is 0
        if(node === null) return 0;
        // Recursively get the height of the left and right subtree
        // return -1 if the subtree isnt balanced
        const leftHeight = checkHeight(node.left);
        const rightHeight = checkHeight(node.right);
        if(leftHeight === -1) return -1;
        if(rightHeight === -1) return -1;
        // If the height difference between left and right is more than 1, not balanced
        if(Math.abs(leftHeight - rightHeight) > 1) return -1;
        // Return the height of the current node
        return 1 + Math.max(leftHeight, rightHeight);
    };
    // If the helper function returns -1, the three is not balanced
    return checkHeight(root) !== -1;
};