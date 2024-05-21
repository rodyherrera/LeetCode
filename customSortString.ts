const customSortString = (order: string, s: string): string => {
    const charIndexMap: { [char: string]: number } = {};
    // Create a map to store the index of each character in the order string 
    for(let i = 0; i < order.length; i++){
        charIndexMap[order[i]] = i;
    }
    // Sort the characters in the s string based on their indices in the order string
    const sortedS = s.split('').sort((a, b) => {
        const indexA = charIndexMap[a] !== undefined ? charIndexMap[a] : Infinity;
        const indexB = charIndexMap[b] !== undefined ? charIndexMap[b] : Infinity;
        return indexA - indexB;
    });
    // Concatenate the sorted charcaters to form the permuted string
    return sortedS.join('');
};