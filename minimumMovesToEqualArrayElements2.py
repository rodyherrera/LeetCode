class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        median = nums[n // 2] 
        moves = sum(abs(num - median) for num in nums)
        return moves