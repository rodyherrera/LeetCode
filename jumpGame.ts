const canJump = (nums: number[]): boolean => {
    let furthestReachable = 0;
    for(let i = 0; i < nums.length; i++){
        if(i > furthestReachable) return false;
        furthestReachable = Math.max(furthestReachable, i + nums[i]);
        if(furthestReachable >= nums.length -1) return true;
    }
    return false;
};