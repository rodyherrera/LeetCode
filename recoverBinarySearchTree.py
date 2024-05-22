class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        def inorder_traversal(node):
            if node:
                inorder_traversal(node.left)
                if self.prev and node.val < self.prev.val:
                    if not self.first:
                        self.first = self.prev
                    self.second = node
                self.prev = node
                inorder_traversal(node.right)
        self.prev = None
        self.first = None
        self.second = None
        inorder_traversal(root)
        self.first.val, self.second.val = self.second.val, self.first.val