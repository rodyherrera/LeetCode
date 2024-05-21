const eraseOverlapIntervals = (intervals: number[][]): number => {
    if(intervals.length === 0) return 0;
    // Sort intervals based on the end time
    intervals.sort((a, b) => a[1] - b[1]);
    let prevEnd = intervals[0][1];
    let removedCount = 0;
    for(let i = 1; i < intervals.length; i++){
        const [start, end] = intervals[i];
        // If the current interval overlaps with the previous one
        if(start < prevEnd){
            removedCount++;
        }else{
            // Update prevEnd to the end of the current interval
            prevEnd = end;
        }
    } 
    return removedCount;
};