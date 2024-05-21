/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal){
    let count = 0;
    let sum = 0;
    let map = { 0: 1 };
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map[sum - goal]){
            count += map[sum - goal];
        }
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
};