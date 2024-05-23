struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution{
    public:
        ListNode* reverseBetween(ListNode* head, int left, int right){
            if(!head || left == right) return head;
            ListNode dummy(0);
            dummy.next = head;
            ListNode *prev = &dummy;
            // Move prev to the node just before the left position
            for(int i = 0; i < left - 1; ++i){
                prev = prev->next;
            }
            // Reverse the sublsit between left and right
            ListNode *curr = prev->next;
            for(int i = 0; i < right - left; ++i){
                ListNode *temp = curr->next;
                curr->next = temp->next;
                temp->next = prev->next;
                prev->next = temp;
            }
            return dummy.next;
        };
};