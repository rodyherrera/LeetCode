const intersect = (nums1: number[], nums2: number[]): number[] => {
    const map: Map<number, number> = new Map();
    const result: number[] = [];
    // Count occurrences of numbers in nums1
    for(const num of nums1){
        map.set(num, (map.get(num) || 0) + 1);
    }
    // Check occurences in nums2 and add to result if found
    for(const num of nums2){
        if(map.has(num) && map.get(num) > 0){
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return result;
};