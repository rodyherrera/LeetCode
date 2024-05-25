#include <vector>
#include <set>

using namespace std;

class Solution{
    public:
        int countRangeSum(vector<int> &nums, int lower, int upper){
            int count = 0;
            long long sum = 0;
            multiset<long long> prefixSums;
            prefixSums.insert(0);
            for(int num : nums){
                sum += num;
                count += distance(prefixSums.lower_bound(sum - upper), prefixSums.upper_bound(sum - lower));
                prefixSums.insert(sum);
            }
            return count;
        }
};