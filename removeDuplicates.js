/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums){
    // If array is empty, return 0
    if(nums.length === 0) return 0;
    // Pointer for the position to place the next unique element
    let k = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            // Place the unique element at position k
            nums[k] = nums[i];
            // Move pointer to next position
            k++;
        }
    }
    return k;
};