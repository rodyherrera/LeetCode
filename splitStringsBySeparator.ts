const splitWordsBySeparator = (words: string[], separator: string): string[] => {
    const result: string[] = [];
    for(const word of words){
        const splitWords = word.split(separator).filter(Boolean);
        result.push(...splitWords);
    }
    return result;
};