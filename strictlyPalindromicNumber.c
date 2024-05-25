#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s){
    int left = 0;
    int right = strlen(s) - 1;
    while(left < right){
        if(s[left++] != s[right--]){
            return false;
        }
    }
    return true;
};

char* convertToBase(int n, int b){
    static char buf[40];
    char* p = &buf[sizeof(buf) - 1];
    *p = '\0';
    while(n != 0){
        *--p = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[n % b];
        n /= b;
    }
    return p;
};

bool isStrictlyPalindromic(int n){
    if(n <= 4) return false;
    for(int b = 2; b <= n - 2; b++){
        char* str = convertToBase(n, b);
        if(!isPalindrome(str)) return false;
    }
    return true;
};