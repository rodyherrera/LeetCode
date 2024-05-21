#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution{
    public:
        string reorganizeString(string s){
            vector<int> freq(26, 0);
            int maxFreq = 0;
            char maxChar = '\0';
            // Count frequencies and find the character with maximum frequency
            for(char c : s){
                freq[c - 'a']++;
                if(freq[c - 'a'] > maxFreq){
                    maxFreq = freq[c - 'a'];
                    maxChar = c;
                }
            }
            // If the frequency of the most frequent character is greater
            // than half the length of the string +1, reodering is not possible
            if(maxFreq > (s.length() + 1) / 2) return "";
            string result(s.length(), ' ');
            // Fill the even indices with the most frequent character
            int idx = 0;
            while(freq[maxChar - 'a']-- > 0){
                result[idx] = maxChar;
                idx += 2;
            }
            // Fill the reamining indices with other characters
            for(int i = 0; i < 26; i++){
                char c = 'a' + i;
                while(freq[i]-- > 0){
                    if(idx >= s.length()) idx = 1;
                    result[idx] = c;
                    idx += 2;
                }
            }
            return result;
        };
};