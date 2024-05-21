#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution{
    public:
        vector<int> maxSubsequence(vector<int>& nums, int k){
            vector<int> stack;
            int drop = nums.size() - k;
            for(int num : nums){
                while(drop && !stack.empty() && stack.back() < num){
                    stack.pop_back();
                    drop--;
                }
                stack.push_back(num);
            }
            stack.resize(k);
            return stack;
        };

        vector<int> merge(vector<int>& nums1, vector<int>& nums2){
            vector<int> result;
            auto it1 = nums1.begin();
            auto it2 = nums2.begin();
            while(it1 != nums1.end() || it2 != nums2.end()){
                if(it1 != nums1.end() && (it2 == nums2.end() || lexicographical_compare(it2, nums2.end(), it1, nums1.end()))){
                    result.push_back(*it1++);
                }else{
                    result.push_back(*it2++);
                }
            }
            return result;
        };

        vector<int> maxNumber(vector<int>& nums1, vector<int>& nums2, int k){
            int m = nums1.size();
            int n = nums2.size();
            vector<int> best;
            for(int i = max(0, k - n); i <= min(k, m); ++i){
                vector<int> subsequence1 = maxSubsequence(nums1, i);
                vector<int> subsequence2 = maxSubsequence(nums2, k - i);
                vector<int> candidate = merge(subsequence1, subsequence2);
                best = max(best, candidate);
            }
            return best;
        };
};