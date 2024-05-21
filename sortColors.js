/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums){
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while(i <= right){
        if(nums[i] === 0){
            // Swap nums[i] with nums[left] to move 0 to the left side
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        }else if(nums[i] === 2){
            // Swap nums[i] with nums[right] to move 2 to the right side
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        }else{
            // If nums[i] is 1, move to the next element
            i++;
        }
    }
};