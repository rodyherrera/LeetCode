class TreeNode{
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null){
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
};

const inorderTraversal = (root: TreeNode | null): number[] => {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    while(current !== null || stack.length > 0){
        while(current !== null){
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        result.push(current.val);
        current = current.right;
    }
    return result;
};