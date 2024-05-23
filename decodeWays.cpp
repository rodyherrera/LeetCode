#include <string>
#include <vector>

class Solution{
    public:
        int numDecodings(std::string s){
            int n = s.size();
            if(n == 0 || s[0] == '0') return 0;
            std::vector<int> dp(n + 1, 0);
            // Base case, empty string
            dp[0] = 1;
            for(int i = 1; i <= n; ++i){
                // Single digit
                if(s[i - 1] != '0'){
                    dp[i] += dp[i - 1];
                }
                // Double digit
                if(i > 1 && (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] <= '6'))){
                    dp[i] += dp[i - 2];
                }
            }
            return dp[n];
        };
};