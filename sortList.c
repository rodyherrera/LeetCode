#include <stdlib.h>

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
*/

struct ListNode* merge(struct ListNode* l1, struct ListNode* l2){
    struct ListNode dummy;
    struct ListNode* tail = &dummy;
    while(l1 && l2){
        if(l1->val <= l2->val){
            tail->next = l1;
            l1 = l1->next;
        }else{
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    if(l1) tail->next = l1;
    if(l2) tail->next = l2;
    return dummy.next;
};

struct ListNode* sortList(struct ListNode* head){
    if(!head || !head->next) return head;
    struct ListNode*  slow = head, *fast = head, *prev = NULL;
    while(fast && fast->next){
        prev = slow;
        slow = slow->next;
        fast = fast->next->next;
    }
    prev->next = NULL;
    struct ListNode* l1 = sortList(head);
    struct ListNode* l2 = sortList(slow);
    return merge(l1, l2);
};

struct ListNode* createNode(int val){
    struct ListNode* newNode = (struct ListNode* )malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
};