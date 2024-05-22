class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        def backtrack(combination, start, target):
            if target == 0:
                result.append(combination[:])
                return
            for i in range(start, len(candidates)):
                # Skip duplicates
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                # Optimization if current candidate exceeds the target, break
                if candidates[i] > target:
                    break
                combination.append(candidates[i])
                backtrack(combination, i + 1, target - candidates[i])
                combination.pop()
        backtrack([], 0, target)
        return result