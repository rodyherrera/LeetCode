const minimumMoves = (s: string): number => {
    let moves = 0;
    let i = 0;
    while(i < s.length){
        if(s[i] === 'X'){
            moves++;
            i += 3;
        }else{
            i++;
        }
    }  
    return moves;
};