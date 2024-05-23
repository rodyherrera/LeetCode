const search = (nums: number[], target: number): boolean => {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        if(nums[middle] === target){
            return true;
        }
        // If the middle part is duplicated, skip the duplicates
        if(nums[left] === nums[middle] && nums[right] === nums[middle]){
            left++;
            right--;
        }else if(nums[left] <= nums[middle]){
            // If the left part is sorted
            if(nums[left] <= target && target < nums[middle]){
                // Target is in the left part
                right = middle - 1;
            }else{
                // Target is in the right part
                left = middle + 1;
            }
        }else{
            // If the right part is sorted
            if(nums[middle] < target && target <= nums[right]){
                // Target is in the right part
                left = middle + 1;
            }else{
                // Target is in the left part
                right = middle - 1;
            }
        }
    }
    return false;
};