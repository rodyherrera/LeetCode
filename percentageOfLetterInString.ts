const percentageLetter = (s: string, letter: string): number => {
    const totalChars = s.length;
    let count = 0;
    for(let i = 0; i < totalChars; i++){
        if(s[i] === letter) count++;
    }
    return Math.floor((count / totalChars) * 100);
};