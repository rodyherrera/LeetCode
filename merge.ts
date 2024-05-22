const merge = (intervals: number[][]): number[][] => {
    if(intervals.length <= 1) return intervals;
    // Sort intervals based on start times
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals: number[][] = [intervals[0]];
    // Merge overlapping intervals
    for(let i = 1; i < intervals.length; i++){
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        if(currentInterval[0] <= lastMergedInterval[1]){
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        }else{
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
};