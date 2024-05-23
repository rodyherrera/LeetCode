const mySqrt = (x: number): number => {
    // Base cases
    if(x === 0 || x === 1) return x;
    let left = 0;
    let right = x;
    let ans = 0;
    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        // If we find the exact square root
        if(middle * middle === x) return middle;
        if(middle * middle < x){
            // Update the answer to the current value
            ans = middle;
            left = middle + 1;
        }else{
            // Move to the left half
            right = middle - 1;
        }
    }
    return ans;
};