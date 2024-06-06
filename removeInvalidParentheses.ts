const removeInvalidParentheses = (s: string): string[] => {
    const result: string[] = [];
    const queue: string[] = [s];
    const visited: Set<string> = new Set();
    let found = false;
    while(queue.length > 0){
        const currentLevelSize = queue.length;
        for(let i = 0; i < currentLevelSize; i++){
            const str = queue.shift()!;
            if(isValid(str)){
                result.push(str);
                found = true;
            }
            if(found) continue;
            for(let j = 0; j < str.length; j++){
                if(str[j] !== '(' && str[j] !== ')') continue;
                const nextStr = str.slice(0, j) + str.slice(j + 1);
                if(!visited.has(nextStr)){
                    queue.push(nextStr);
                    visited.add(nextStr);
                }
            }
        }
        if(found) break;
    }
    return result;
};

const isValid = (s: string): boolean => {
    let balance = 0;
    for(const char of s){
        if(char === '('){
            balance++;
        }else if(char === ')'){
            balance--;
        }
        if(balance < 0) return false;
    }
    return balance === 0;
};