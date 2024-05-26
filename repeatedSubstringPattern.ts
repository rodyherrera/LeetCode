const repeatedSubstringPattern = (s: string): boolean => {
    let len = s.length;
    for(let i = 0; i < Math.floor(len / 2) + 1; i++){
        if(len % i === 0){
            const substr = s.slice(0, i);
            if(substr.repeat(len / length) === s) return true;
        }
    }
    return false;
};

console.log(repeatedSubstringPattern('abac'))