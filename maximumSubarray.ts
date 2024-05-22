const maxSubArray = (nums: number[]): number => {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
    for(let i = 1; i < nums.length; i++){
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};