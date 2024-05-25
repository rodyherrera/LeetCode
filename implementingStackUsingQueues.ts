class MyStack{
    queue1: number[];
    queue2: number[];

    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    };

    push(x: number): void{
        // Move all elements from queue1 to queue2
        while(this.queue1.length !== 0){
            this.queue2.push(this.queue1.shift()!);
        }
        // Push the new element to queue1
        this.queue1.push(x);
        // Move all elements back from queue2 to queue1
        while(this.queue2.length !== 0){
            this.queue1.push(this.queue2.shift()!);
        }
    };

    pop(): number{
        return this.queue1.shift()!;
    };

    top(): number{
        return this.queue1[0];
    };

    empty(): boolean{
        return this.queue1.length === 0;
    };
};