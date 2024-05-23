/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
*/

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
    if(head === null || k === 0) return head;
    let length = 1;
    let current = head;
    while(current.next !== null){
        current = current.next;
        length++;
    }
    current.next = head;
    k = k % length;
    for(let i = 0; i < length - k; i++){
        current = current.next!;
    }
    const newHead = current.next;
    current.next = null;
    return newHead;
};