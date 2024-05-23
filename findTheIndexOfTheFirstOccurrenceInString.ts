const computeLPSArray = (pattern: string): number[] => {
    const lps = new Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;
    while(i < pattern.length){
        if(pattern[i] === pattern[length]){
            length++;
            lps[i] = length;
            i++;
        }else{
            if(length !== 0){
                length = lps[length - 1];
            }else{
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
};

const strStr = (haystack: string, needle: string): number => {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    if(needleLength === 0) return 0;
    if(haystackLength < needleLength) return -1;
    const lps = computeLPSArray(needle);
    // Index for haystack
    let i = 0;
    // Index for needle
    let j = 0;
    while(i < haystackLength){
        if(needle[j] === haystack[i]){
            i++;
            j++;
        }
        if(j === needleLength){
            // Match found!
            return i - j;
        }else if(i < haystackLength && needle[j] !== haystack[i]){
            if(j !== 0){
                j = lps[j - 1];
            }else{
                i++;
            }
        }
    }
    // No match found
    return -1;
};