const isPerfectSquare = (num: number): boolean => {
    // Base case, 0 and 1 are perfect squares
    if(num < 2) return true;
    // Initialize left and right boundaries for binary search
    let left = 2;
    let right = Math.floor(num / 2);
    // Binary search
    while(left <= right){
        // Calculate the midpoint
        const middle = left + Math.floor((right - left) / 2);
        // Calculate the square of the midpoint
        const square = middle * middle;
        // Check if the square of the midpoint equls num
        if(square === num){
            // Return true if num is a perfect square
            return true;
        }else if(square < num){
            // If square is less tahn num, adjust the left boundary
            left = middle + 1;
        }else{
            // If square is grather than num, adjust the right boudnary
            right = middle - 1;
        }
    }
    // If no perfect square is found, return false
    return false;
};