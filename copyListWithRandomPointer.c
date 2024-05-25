#include <stdlib.h>

struct Node{
    int val;
    struct Node *next;
    struct Node *random;
};

struct Node* createNode(int val){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->val = val;
    newNode->next = NULL;
    newNode->random = NULL;
    return newNode;
};

struct Node* copyRandomList(struct Node* head){
    if(!head) return NULL;
    struct Node* current = head;
    while(current){
        struct Node* newNode = createNode(current->val);
        newNode->next = current->next;
        current->next = newNode;
        current = newNode->next;
    }
    current = head;
    while(current){
        if(current->random){
            current->next->random = current->random->next;
        }
        current = current->next->next;
    }
    current = head;
    struct Node* newHead = head->next;
    struct Node* copy = newHead;
    while(current){
        current->next = current->next->next;
        if(copy->next){
            copy->next = copy->next->next;
        }
        current = current->next;
        copy = copy->next;
    };
    return newHead;
};