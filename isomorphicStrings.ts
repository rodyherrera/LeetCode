const isIsomorphic = (s: string, t: string): boolean => {
    if(s.length !== t.length) return false;
    const sToTMap = new Map<string, string>();
    const tToSMap = new Map<string, string>();
    for(let i = 0; i < s.length; i++){
        const sChar = s[i];
        const tChar = t[i];
        if((sToTMap.has(sChar) && sToTMap.get(sChar) !== tChar) ||
               (tToSMap.has(tChar) && tToSMap.get(tChar) !== sChar)){
            return false;
        }
        sToTMap.set(sChar, tChar);
        tToSMap.set(tChar, sChar);
    }
    return true;
};