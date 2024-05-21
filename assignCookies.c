#include <stdlib.h>
#include <stdio.h>

int compare(const void *a, const void *b){
    return (*(int *)a - *(int *)b);
};

int findContentChildren(int *g, int gSize, int *s, int sSize){
    // Sort both the greed factors and the sizes of the cookies
    qsort(g, gSize, sizeof(int), compare);
    qsort(s, sSize, sizeof(int), compare);
    int contentChildren = 0;
    // Index for greed factors
    int i = 0;
    // Index for sizes of cookies
    int j = 0;
    // Iterate through the sorted lists
    while(i < gSize && j < sSize){
        // If the size of the cookie is greater than or equal to the child's greed factor
        // assign the cookie to the child and move to the next child and next cookie
        if(s[j] >= g[i]){
            contentChildren++;
            i++;
            j++;
        }else{
            // If the size of the cookie is smaller than the child's greed factor
            // Move to the next cookie
            j++;
        }
    }
    return contentChildren;
};