const addStrings = (num1: string, num2: string): string => {
    let result = '';
    // The carry variable will allow us to carry the sum.
    let carry = 0;
    // We initialize the variables i, j from the last indices of the given strings.
    let i = num1.length - 1;
    let j = num2.length - 1;
    // The while loop will be executed as long as there are 
    // still digits in num1 or num2 (checking if i or j >= 0) or if there is a carry.
    while(i >= 0 || j >= 0 || carry > 0){
        // In case there are no digits, but the while loop continues 
        // to be executed because there is a carry, we carry out the 
        // respective evaluation and if there is not, we simply assign a 0.
        const digit1 = (i >= 0) ? +num1[i] : 0;
        const digit2 = (j >= 0) ? +num2[j] : 0;
        const sum = digit1 + digit2 + carry;
        // The % 10 operator is used to obtain the ones digit 
        // (the resulting digit) of the two-digit sum and the carry, 
        // while the Math.floor(sum / 10) operator is used to 
        // calculate the carry.
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        // We decrease the indices to process the remaining digits.
        j--;
        i--;
    }
    return result;
};