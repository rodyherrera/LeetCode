const maxProfit = (prices: number[]): number => {
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        // if the current price is greather than the previous price,
        // add it to the profit!
        if(prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};