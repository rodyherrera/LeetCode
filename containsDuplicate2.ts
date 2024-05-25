const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    const numMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(numMap.has(num) && i - numMap.get(num)! <= k){
            return true;
        }
        numMap.set(num, i);
    }
    return false;
};