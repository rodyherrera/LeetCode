const isSubsequence = (s: string, t: string): boolean => {
    const indexMap: Map<string, number[]> = new Map();
    // Preprocess t to create an index mapping each character to its position
    for(let i = 0; i < t.length; i++){
        const char = t[i];
        if(!indexMap.has(char)) indexMap.set(char, []);
        indexMap.get(char)?.push(i);
    }
    let prevIndex = -1;
    // Check if s is a subsequence of t using the index mapping
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        if(!indexMap.has(char)) return false;
        const positions = indexMap.get(char) || [];
        let found = false;
        for(const pos of positions){
            if(pos > prevIndex){
                prevIndex = pos;
                found = true;
                break;
            }
        }
        if(!found) return false;
    }
    return true;
};