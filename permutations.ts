const permute = (nums: number[]): number[][] => {
    const result: number[][] = [];
    const used: boolean[] = new Array(nums.length).fill(false);
    const current: number[] = [];
    backtrack(nums, result, used, current);
    return result;
};

const backtrack = (nums: number[], result: number[][], used: boolean[], current: number[]): void => {
    if(current.length === nums.length){
        result.push([ ...current ]);
        return;
    }
    for(let i = 0; i < nums.length; i++){
        if(!used[i]){
            current.push(nums[i]);
            used[i] = true;
            backtrack(nums, result, used, current);
            used[i] = false;
            current.pop();
        }
    }
};