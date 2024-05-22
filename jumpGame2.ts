const jump = (nums: number[]): number => {
    const n = nums.length;
    let jumps = 0;
    let farthest = 0;
    let currentEnd = 0;
    for(let i = 0; i < n - 1; i++){
        farthest = Math.max(farthest, i + nums[i]);
        if(i === currentEnd){
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
};