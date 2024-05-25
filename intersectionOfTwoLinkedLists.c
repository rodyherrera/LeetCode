/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
*/

int getLength(struct ListNode* head){
    int length = 0;
    while(head){
        length++;
        head = head->next;
    }
    return length;
};

struct ListNode* getIntersectionNode(struct ListNode* headA, struct ListNode* headB){
    int lenA = getLength(headA);
    int lenB = getLength(headB);
    while(lenA > lenB){
        headA = headA->next;
        lenA--;
    }
    while(lenB > lenA){
        headB = headB->next;
        lenB--;
    }
    while(headA != headB){
        headA = headA->next;
        headB = headB->next;
    }
    return headA;
};

struct ListNode* createNode(int val){
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
};

