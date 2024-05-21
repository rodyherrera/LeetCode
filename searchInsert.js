/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if(nums[middle] === target){
            // Target found
            return middle;
        }else if(nums[middle] < target){
            // Move to the right half
            left = middle + 1;
        }else{
            // Move to the left half
            right = middle - 1;
        }
    }
    return left;
};