/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
*/

class Solution{
    public:
        TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder){
            unordered_map<int, int> inorder_map;
            for(int i = 0; i < inorder.size(); i++){
                inorder_map[inorder[i]] = i;
            }
            return buildTreeHelper(inorder, postorder, 0, inorder.size() - 1, 0, postorder.size() - 1, inorder_map);
        };
        
        TreeNode* buildTreeHelper(vector<int>& inorder, vector<int>& postorder, int inStart, int inEnd, int postStart, int postEnd, unordered_map<int, int>& inorder_map){
            if(inStart > inEnd || postStart > postEnd) return nullptr; 
            int rootVal = postorder[postEnd];
            TreeNode* root = new TreeNode(rootVal);
            int rootIndexInorder = inorder_map[rootVal];
            int leftSubtreeSize = rootIndexInorder - inStart;
            root->left = buildTreeHelper(inorder, postorder, inStart, rootIndexInorder - 1, postStart, postStart + leftSubtreeSize - 1, inorder_map);
            root->right = buildTreeHelper(inorder, postorder, rootIndexInorder + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1, inorder_map);
            return root;
        }
};