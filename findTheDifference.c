#include <stdio.h>

char findTheDifference(char *s, char *t){
    int sum_s = 0, sum_t = 0;
    // Calculate the ASCII value sum of all characters in string s
    while(*s != '\0'){
        sum_s += *s;
        s++;
    }
    // Calculate the ASCII value sum of all characters in string t
    while(*t != '\0'){
        sum_t += *t;
        t++;
    }
    // Return the character representation of the difference between the sums
    return (char)(sum_t - sum_s);
};