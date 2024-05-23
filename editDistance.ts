const minDistance = (word1: string, word2: string): number => {
    const m = word1.length;
    const n = word2.length;
    // Initialize dp array
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // Initialize the base cases
    for(let i = 0; i <= m; i++){
        // Minimum number of operations to convert 
        // word1[0 ... i - 1] to an empty string
        dp[i][0] = i;
    }
    for(let j = 0; j <= n; j++){
        // Minimum number of operations to convert
        // an empty string to word2[0 ... j - 1]
        dp[0][j] = j;
    }
    // Fill in the dp array using the recurrence relation
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(word1[i - 1] === word2[j - 1]){
                // No operation needed
                dp[i][j] = dp[i - 1][j - 1];
            }else{
                dp[i][j] = Math.min(
                    // Delete operation
                    dp[i - 1][j] + 1,
                    // Insert operation
                    dp[i][j - 1] + 1,
                    // Replace operation
                    dp[i - 1][j - 1] + 1);
            }
        }
    }
    return dp[m][n];
};