const findRightInterval = (intervals: number[][]): number[] => {
    const sortedIntervals = intervals.map((interval, index) => [interval[0], index]);
    sortedIntervals.sort((a, b) => a[0] - b[0]);
    const result: number[] = new Array(intervals.length).fill(-1);
    for(let i = 0; i < intervals.length; i++){
        const [start, end] = intervals[i];
        const targetStart = findFirstGreaterOrEqual(sortedIntervals, end);
        result[i] = targetStart === sortedIntervals.length ? -1 : sortedIntervals[targetStart][1];
    }
    return result;
};

const findFirstGreaterOrEqual = (sortedIntervals: number[][], target: number): number => {
    let left = 0;
    let right = sortedIntervals.length;
    while(left < right){
        const middle = Math.floor((left + right) / 2);
        if(sortedIntervals[middle][0] >= target){
            right = middle;
        }else{
            left = middle + 1;
        }
    }
    return left;
};