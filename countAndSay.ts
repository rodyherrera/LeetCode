const countAndSay = (n: number): string => {
    if(n === 1) return '1';
    let prevSeq = '1';
    for(let i = 2; i <= n; i++){
        let currentSeq = '';
        let count = 1;
        for(let j = 1; j < prevSeq.length; j++){
            if(prevSeq[j] === prevSeq[j - 1]){
                count++;
            }else{
                currentSeq += count.toString() + prevSeq[j - 1];
                count = 1;
            }
        }
        currentSeq += count.toString() + prevSeq[prevSeq.length - 1];
        prevSeq = currentSeq;
    }
    return prevSeq;
};