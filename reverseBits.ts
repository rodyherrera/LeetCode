const reverseBits = (n: number): number => {
    let result = 0;
    for(let i = 0; i < 32; i++){
        // Left shift result to make room for the next bit
        result <<= 1;
        // Set the least significant bit of result to the current bit of n
        result |= n & 1;
        // Unsigned right shift n to move the next bit
        n >>>= 1;
    }
    // Ensure result is treated as an unsigned integer
    return result >>> 0;
};