const countDigitOne = (n: number): number => {
    // Initialize the count of '1's
    let count = 0;
    // Initialize the factor used to analyze each digit of the number
    let factor = 1;
    // Iterate through each digit of the number
    // from units place to the most significant digit
    while(factor <= n){
        // Calculate lower numbers, the current digit, and higher numbers
        let lowerNumbers = n - Math.floor(n / factor) * factor;
        let currentDigit = Math.floor((n / factor) % 10);
        let higherNumbers = Math.floor(n / (factor * 10));
        // Count occurences of '1' based on the current digit
        if(currentDigit == 0){
            count += higherNumbers * factor;
        }else if(currentDigit === 1){
            count += higherNumbers * factor + lowerNumbers + 1;
        }else{
            count += (higherNumbers + 1) * factor;
        }
        // Move to the next digit place
        factor *= 10;
    }
    return count;
};