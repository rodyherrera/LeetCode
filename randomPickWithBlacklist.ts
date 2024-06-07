class Solution{
    private n: number;
    private blacklist: Set<number>;
    private mapping: Map<number, number>;
    private validSize: number;

    constructor(n: number, blacklist: number[]){
        this.n = n;
        this.blacklist = new Set(blacklist);
        this.mapping = new Map<number, number>();
        this.validSize = n - blacklist.length;
        let last = n - 1;
        for(const b of blacklist){
            if(b < this.validSize){
                while(this.blacklist.has(last)) last--;
                this.mapping.set(b, last);
                last--;
            }
        }
    };

    pick(): number{
        const rand = Math.floor(Math.random() * this.validSize);
        return this.mapping.get(rand) ?? rand;
    };
};