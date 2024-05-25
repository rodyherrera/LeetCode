#include <vector>
#include <algorithm>

using namespace std;

class Solution{
    public:
        void wiggleSort(vector<int>& nums){
            int n = nums.size();
            nth_element(nums.begin(), nums.begin() + n / 2, nums.end());
            int median = nums[n / 2];
            auto index = [n](int i, int num) { return (2 * i + 1) % (n | 1); };
            int left = 0, i = 0, right = n - 1;
            while(i <= right){
                if(nums[index(i, n)] > median){
                    swap(nums[index(left++, n)], nums[index(i++, n)]);
                }else if(nums[index(i, n)] < median){
                    swap(nums[index(right--, n)], nums[index(i, n)]);
                }else{
                    i++;
                }
            }
        };
};