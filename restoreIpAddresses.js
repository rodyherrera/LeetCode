/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s){
    let result = [];
    const isValidPart = (part) => {
        if(part.length > 1 && part[0] === '0') return false;
        const num = parseInt(part);
        return num >= 0 && num <= 255;
    };
    const backtrack = (start, parts, current) => {
        if(parts ===  4){
            if(start === s.length) result.push(current.join('.'));
            return;
        }
        for(let i = 1; i <= 3; i++){
            if(start + i <= s.length){
                const part = s.substring(start, start + i);
                if(isValidPart(part)){
                    current.push(part);
                    backtrack(start + i, parts + 1, current);
                    current.pop();
                }
            }
        }
    };
    backtrack(0, 0, []);
    return result;
};