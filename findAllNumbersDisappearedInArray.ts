const findDisappearedNumbers = (nums: number[]): number[] => {
    const n = nums.length;
    for(let i = 0; i < n; i++){
        const index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0){
            nums[index] = -nums[index];
        }
    }
    const result: number[] = [];
    for(let i = 0; i < n; i++){
        if(nums[i] > 0) result.push(i + 1);
    }
    return result;
};