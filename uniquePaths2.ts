const uniquePathsWithObstacles = (obstaclesGrid: number[][]): number => {
    const m = obstaclesGrid.length;
    const n = obstaclesGrid[0].length;
    // Initialize dp array
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // Initialize the first column (if no obstacle)
    for(let i = 0; i < m && obstaclesGrid[i][0] === 0; i++){
        dp[i][0] = 1;
    }
    // Initialize the first row (if no obstacle)
    for(let j = 0; j < n && obstaclesGrid[0][j] === 0; j++){
        dp[0][j] = 1;
    }
    // Calculate unique paths for the rest of the grid
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstaclesGrid[i][j] === 0){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};