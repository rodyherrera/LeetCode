/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
*/

struct ListNode* reverseList(struct ListNode* head){
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    struct ListNode* next = NULL;
    while(curr != NULL){
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

struct ListNode* findMiddle(struct ListNode* head){
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
};

void reorderList(struct ListNode* head){
    if(head == NULL || head->next == NULL) return;
    struct ListNode* middle = findMiddle(head);
    struct ListNode* secondHalf = reverseList(middle->next);
    middle->next = NULL;
    struct ListNode* curr = head;
    while(secondHalf != NULL){
        struct ListNode* temp1 = curr->next;
        struct ListNode* temp2 = secondHalf->next;
        curr->next = secondHalf;
        secondHalf->next = temp1;
        curr = temp1;
        secondHalf = temp2;
    }
};