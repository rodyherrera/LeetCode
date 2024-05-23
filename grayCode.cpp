#include <vector>

class Solution{
    public:
        std::vector<int> grayCode(int n){
            std::vector<int> result;
            result.push_back(0);
            for(int i = 0; i < n; ++i){
                int size = result.size();
                for(int j = size - 1; j >= 0; --j){
                    result.push_back(result[j] | (1 << i));
                }
            }
            return result;
        }
};