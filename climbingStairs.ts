const climbStairs = (n: number): number => {
    // Base cases
    if(n === 1 || n === 2) return n;
    // Initialize dp array
    const dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++){
        // Recurrence relation
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};