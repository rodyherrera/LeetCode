/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height){
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    // Loop until the two pointers meet
    while(left < right){
        // Calculate the height of the current container
        const h = Math.min(height[left], height[right]);
        // Calculate the width of the current container
        const w = right - left;
        // Calculate the area of the current container
        const area = h * w;
        // Update the maximum area if needed
        maxArea = Math.max(maxArea, area);
        // Move the pointer with the lower height
        if(height[left] < height[right]){
            // Store the current height for comparison
            let currentLeftHeight = height[left];
            // move the left pointer until a higher height is found
            while(left < right && height[left] <= currentLeftHeight){
                left++;
            }
        }else{
            // Store the current height for comparison
            let currentRightHeight = height[right];
            // Move the right pointer until a higher height is found
            while(left < right && height[right] <= currentRightHeight){
                right--;
            }
        }
    }
    return maxArea;
};