#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution{
    public:
        unordered_map<string, bool> memo;

        bool isScramble(string str1, string str2){
            if(str1 == str2) return true;
            if(str1.size() != str2.size()) return false;
            string key = str1 + "#" + str2;
            if(memo.find(key) != memo.end()) return memo[key];
            string sortedStr1 = str1;
            string sortedStr2 = str2;
            sort(sortedStr1.begin(), sortedStr1.end());
            sort(sortedStr2.begin(), sortedStr2.end());
            if(sortedStr1 != sortedStr2) return memo[key] = false;
            int n = str1.size();
            for(int i = 1; i < n; ++i){
                if(isScramble(str1.substr(0, i), str2.substr(0, i))
                    && isScramble(str1.substr(i), str2.substr(i))){
                    return memo[key] = true;
                }
                if(isScramble(str1.substr(0, i), str2.substr(n - i)) 
                    && isScramble(str1.substr(i), str2.substr(0, n - i))){
                    return memo[key] = true;
                }
            }
            return memo[key] = false;
        };
};