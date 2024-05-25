#include <stdlib.h>
#include <string.h>

void reverseString(char* s, int start, int end){
    while(start < end){
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};

char* reverseWords(char* s){
    int len = strlen(s);
    reverseString(s, 0, len - 1);
    int start = 0;
    for(int end = 0; end < len; end++){
        if(s[end] == ' '){
            reverseString(s, start, end - 1);
            start = end + 1;
        }
    }
    reverseString(s, start, len - 1);
    int i = 0, j = 0;
    while(s[j]){
        while(s[j] == ' ' && s[j + 1] == ' ') j++;
        s[i++] = s[j++];
    }
    s[i] = '\0';
    while(s[0] == ' '){
        s++;
    }
    int n = strlen(s);
    while(n > 0 && s[n - 1] == ' '){
        s[--n] = '\0';
    }
    return s;
};