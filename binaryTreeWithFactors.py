class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        MOD = 10 ** 9 + 7
        arr.sort()
        dp = {}
        for num in arr:
            dp[num] = 0
            for factor in range(1, int(num ** 0.5) + 1):
                if num % factor == 0:
                    another_factor = num // factor
                    if factor in dp and another_factor in dp:
                        if factor != another_factor:
                            dp[num] += dp[factor] * dp[another_factor] * 2
                        else:
                            dp[num] += dp[factor] * dp[another_factor]
                        dp[num] %= MOD
            dp[num] += 1
        return sum(dp.values()) % MOD