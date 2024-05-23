class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while(head !== null && head.next !== null){
        // Nodes to be swapped
        const firstNode = head;
        const secondNode = head.next;
        // Swapping
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        // Re-position prev and head for next swap
        prev = firstNode;
        head = firstNode.next;
    }
    return dummy.next;
};