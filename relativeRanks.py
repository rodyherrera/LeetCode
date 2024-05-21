class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        ranked = sorted((s, i) for i, s in enumerate(score))[::-1]
        result = [None] * len(score)
        for i, (s, idx) in enumerate(ranked):
            if i == 0:
                result[idx] = 'Gold Medal'
            elif i == 1:
                result[idx] = 'Silver Medal'
            elif i == 2:
                result[idx] = 'Bronze Medal'
            else:
                result[idx] = str(i + 1)
        return result