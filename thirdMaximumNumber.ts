const thirdMax = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    const uniqueValues = [ ...new Set(nums) ];
    const len = uniqueValues.length;
    if(len <= 2) return uniqueValues[len - 1];
    return uniqueValues[len - 3];
};