const intersection = (nums1: number[], nums2: number[]): number[] => {
    const uniqueItems = [ ...new Set([ ...nums1, ...nums2 ]) ];
    const intersectionValues = uniqueItems.filter((val) => nums1.includes(val) && nums2.includes(val));
    return intersectionValues;
};