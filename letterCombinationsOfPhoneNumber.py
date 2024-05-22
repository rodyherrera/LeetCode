class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        mappings = {
            '2': 'abc', '3': 'def', '4': 'ghi',
            '5': 'jkl', '6': 'mno', '7': 'pqrs',
            '8': 'tuv', '9': 'wxyz'
        }
        def backtrack(combination, index):
            # Base case if combination length matches digits length
            if len(combination) == len(digits):
                result.append(combination)
                return
            current_digit = digits[index]
            # Iterate through the letters corresponding to current difit
            for letter in mappings[current_digit]:
                # Append letter to combinatio and call recursively for next digit
                backtrack(combination + letter, index + 1)
        result = []
        backtrack('', 0)
        return result
        