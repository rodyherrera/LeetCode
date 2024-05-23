const plusOne = (digits: number[]): number[] => {
    const n = digits.length;
    // Start from the lesat significant digit
    for(let i = n - 1; i>= 0; i--){
        // Add one to the current digit
        digits[i]++;
        // If the digit becomes less than 10, no need to
        // propagate carry, return the updated digits
        if(digits[i] < 10) return digits;
        // If the digit becomes 10, set it to 0 and continue
        // to the next higher digit
        digits[i] = 0;
    }
    // If all digits are 9, we need to add an additional digit
    // at the beggining
    digits.unshift(1);
    return digits;
};