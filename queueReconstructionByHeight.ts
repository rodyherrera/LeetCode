const reconstructQueue = (people: number[][]): number[][] => {
    // Sort people based on height in descending order
    // if heights are the same, sort based on the number of people in front in ascending order
    people.sort((a, b) => (b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]));
    const queue: number[][] = [];
    // Reconstruct the queue by inserting each person at the correct position
    for(const [height, count] of people){
        queue.splice(count, 0, [height, count]);
    }
    return queue;
};