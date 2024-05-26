const guessNumber = (n: number): number => {
    let left = 1;
    let right = n;
    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        const result = guess(middle);
        if(result === 0){
            return middle;
        }else if(result === -1){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
};