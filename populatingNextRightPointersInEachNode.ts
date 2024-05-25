/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         th   is.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
*/

const connect = (root: Node | null): Node | null => {
    if(!root) return null;
    const connectNodes = (node1: Node | null, node2: Node | null): void => {
        if(!node1 || !node2) return;
        node1.next = node2;
        connectNodes(node1.left, node1.right);
        connectNodes(node2.left, node2.right);
        connectNodes(node1.right, node2.left);
    };
    connectNodes(root.left, root.right);
    return root;
};