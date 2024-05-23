const lengthOfLastWord = (s: string): number => {
    s = s.trim();
    const words = s.split(' ');
    const lastWord = words[words.length - 1];
    return lastWord.length;
};