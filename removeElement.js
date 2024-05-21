/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val){
    // Pointer for the position to place the next non-value element
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            // Place non-value element at position k
            nums[k] = nums[i];
            k++;
        }
    }
    // "k" represents the number of elements not equal to value
    return k;
};