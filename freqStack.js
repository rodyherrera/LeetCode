class FreqStack{
    constructor(){
        // Map to keep track of frequency of each element
        this.freqMap = new Map();
        // Map to keep track of stacks for each frequency
        this.stackMap = new Map();
        // Variable to store the maximum frequency
        this.maxFreq = 0;
    };

    push(value){
        // Increment frequency of value
        const freq = (this.freqMap.get(value) || 0) + 1;
        // Update frequency in freqMap
        this.freqMap.set(value, freq);
        // Update maxFreq if necessary
        this.maxFreq = Math.max(this.maxFreq, freq);
        // Push val onto the corresponding stack in stackMap
        if(!this.stackMap.has(freq)){
            this.stackMap.set(freq, []);
        }
        this.stackMap.get(freq).push(value);
    };

    pop(){
        // Get the stack with max frequency
        const stack = this.stackMap.get(this.maxFreq);
        // Pop the top element
        const value = stack.pop();
        // Update frequency in freqMap
        this.freqMap.set(value, this.freqMap.get(value) - 1);
        // If the stack is now empty after popping, decrease maxFreq
        if(stack.length === 0){
            this.maxFreq--;
        }
        return value;
    };
};