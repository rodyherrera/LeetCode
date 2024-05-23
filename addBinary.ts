const addBinary = (a: string, b: string): string => {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    // Iterate from the least significant bit to 
    // the most significant bit
    while(i >= 0 || j >= 0){
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        // Compute the sum of the current bits along with the carry
        const sum = digitA + digitB + carry;
        // Append the least significant bit of the sum to the result
        result = (sum % 2) + result;
        // Update the carry for the next bit addition
        carry = Math.floor(sum / 2);
        // Move to the next higher bit
        i--;
        j--;
    }
    // If there is a carry left after processing all bits append it to the result
    if(carry > 0){
        result = carry + result;
    }
    return result;
};