const fizzBuzz = (n: number): string[] => {
    const arr: string[] = [];
    for(let i = 1; i <= n; i++){
        const isDivisibleByThree = i % 3 === 0;
        const isDivisibleByFive = i % 5 === 0;
        if(isDivisibleByFive && isDivisibleByThree){
            arr.push('FizzBuzz');
        }else if(isDivisibleByFive){
            arr.push('Buzz');
        }else if(isDivisibleByThree){
            arr.push('Fizz');
        }else{
            arr.push(String(i));
        }
    }
    return arr;
};
