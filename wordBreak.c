#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool wordInDict(char* word, char **wordDict, int wordDictSize){
    for(int i = 0; i < wordDictSize; i++){
        if(strcmp(word, wordDict[i]) == 0) return true;
    }
    return false;
};

bool wordBreak(char* s, char** wordDict, int wordDictSize){
    int n = strlen(s);
    bool *dp = (bool*)malloc((n + 1) * sizeof(bool));
    memset(dp, false, (n + 1) * sizeof(bool));
    dp[0] = true;
    for(int i = 1; i <= n; i++){
        for(int j = 0; j < i; j++){
            if(dp[j] && wordInDict(strndup(s + j, i - j), wordDict, wordDictSize)){
                dp[i] = true;
                break;
            }
        }
    }
    bool result = dp[n];
    free(dp);
    return result;
};