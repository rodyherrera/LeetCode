int maxProduct(int* nums, int numsSize){
    int max_prod = nums[0];
    int min_prod = nums[0];
    int result = nums[0];
    for(int i = 1; i < numsSize; i++){
        if(nums[i] < 0){
            int temp = max_prod;
            max_prod = min_prod;
            min_prod = temp;
        }
        max_prod = max_prod > nums[i] ? max_prod * nums[i] : nums[i];
        min_prod = min_prod < nums[i] ? min_prod * nums[i] : nums[i];
        result = result > max_prod ? result : max_prod;
    }
    return result;
};