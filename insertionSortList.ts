const insertionSortList = (head: ListNode | null): ListNode | null => {
    // Create a dummy head node to facilitate the insertion process
    const dummyHead = new ListNode(0);
    let current = head;
    // Iterate through the original list
    while(current !== null){
        // At each iteration, remove one element from the input list
        const next = current.next;
        // Find the correct location within the sorted list and insert the element
        let prev = dummyHead;
        while(prev.next !== null && prev.next.val < current.val){
            prev = prev.next;
        }
        current.next = prev.next;
        prev.next = current;
        // Move to the next element in the input list
        current = next;
    }
    // Return the sorted list head
    return dummyHead.next;
};