const largestDivisibleSubset = (nums: number[]): number[] => {
    if(nums.length === 0) return [];
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const dp: number[] = new Array(n).fill(1);
    const prev: number[] = new Array(n).fill(-1);
    let maxLength = 1;
    let maxIndex = 0;
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]){
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if(dp[i] > maxLength){
            maxLength = dp[i];
            maxIndex = i;
        }
    }
    const result: number[] = [];
    let curr = maxIndex;
    while(curr !== - 1){
        result.unshift(nums[curr]);
        curr = prev[curr];
    }
    return result;
};