const toHex = (num: number): string => {
    // Handle the special case of 0
    if(num === 0) return '0';
    let result = '';
    // Valid hexadecimal characters
    const hexChars = '0123456789abcdef';
    // Ensure num is positive
    if(num < 0) num = Math.pow(2, 32) + num;
    // Convert num to hexadecimal
    while(num > 0){
        // Get the hexadecimal digit corresponding to the remainder of division by 16
        const remainder = num % 16;
        // Add the digit to the beginning of the result
        result = hexChars[remainder] + result;
        num = Math.floor(num / 16);
    }
    return result;
};