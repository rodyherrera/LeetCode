const uniquePaths = (m: number, n: number): number => {
    // Initialize the dp matrix
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // Initialize the first row and first column width 1
    for(let i = 0; i < m; i++){
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++){
        dp[0][j]= 1;
    }
    // Calculate the unique paths for the remaining cells
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};