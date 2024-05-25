#include <stdlib.h>
#include <stdbool.h>

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
*/

bool hasCycle(struct ListNode *head){
    if(head == NULL || head->next == NULL) return false;
    struct ListNode* slow = head;
    struct ListNode* fast = head->next;
    while(slow != fast){
        if(fast == NULL || fast->next == NULL) return false;
        slow = slow->next;
        fast = fast->next->next;
    }
    return true;
};

struct ListNode* createNode(int val){
    struct ListNode* newNode = (struct ListNode*) malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
};