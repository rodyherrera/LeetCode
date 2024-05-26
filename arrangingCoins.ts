const arrangeCoins = (n: number): number => {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};