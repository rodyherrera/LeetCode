const reverseVowels = (s: string): string => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        while(i < j && !vowels.has(chars[i])){
            i++;
        }   
        while(i < j && !vowels.has(chars[j])){
            j--;
        }
        if(i < j){
            const temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        }
    }
    return chars.join('');
};