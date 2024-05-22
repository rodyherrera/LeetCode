const permuteUnique = (nums: number[]): number[][] => {
    const result: number[][] = [];
    const used: boolean[] = new Array(nums.length).fill(false);
    const current: number[] = [];
    // Sort the array to handle duplciates efficiently
    nums.sort((a, b) => a - b);
    backtrack(nums, result, used, current);
    return result;
};

const backtrack = (nums: number[], result: number[][], used: boolean[], current: number[]): void => {
    if(current.length === nums.length){
        result.push([ ...current ]);
        return;
    }
    for(let i = 0; i < nums.length; i++){
        // Skip if the number is already uesd or if it's a duplicate
        if(used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])){
            continue;
        }
        current.push(nums[i]);
        used[i] = true;
        backtrack(nums, result, used, current);
        used[i] = false;
        current.pop();
    }
};