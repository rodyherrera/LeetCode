class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        def backtrack(combination, start, target):
            if target == 0:
                result.append(combination[:])
                return
            for i in range(start, len(candidates)):
                # Optimization if current candidate exceeds the target, break
                if candidates[i] > target:
                    break
                combination.append(candidates[i])
                backtrack(combination, i, target - candidates[i])
                combination.pop()
        backtrack([], 0, target)
        return result