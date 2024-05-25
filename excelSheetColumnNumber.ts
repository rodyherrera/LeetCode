const titleToNumber = (columnTitle: string): number => {
    let result = 0;
    const base = 'A'.charCodeAt(0);
    for(let i = 0; i < columnTitle.length; i++){
        const charValue = columnTitle.charCodeAt(i) - base + 1;
        result = result * 26 + charValue;
    }
    return result;
};