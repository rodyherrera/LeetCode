const readBinaryWatch = (turnedOn: number): string[] => {
    const result: string[] = [];
    // Iterate through all possible combinations of hours and minutes
    for(let hour = 0; hour < 12; hour++){
        for(let minute = 0; minute < 60; minute++){
            // Count the number of LEDs that are on in the binary representation
            if(countBits(hour) + countBits(minute) === turnedOn){
                // Format the time and add it to the result
                result.push(`${hour}:${minute.toString().padStart(2, '0')}`);
            }
        }
    }
    return result;
};

const countBits = (num: number): number => {
    let count = 0;
    while(num > 0){
        count += num & 1;
        num >>= 1;
    }
    return count;
};