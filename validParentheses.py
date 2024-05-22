class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        # Dictionary to store mappings of closing to opening parentheses
        mappings = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for char in s:
            if char in mappings.values():
                stack.append(char)
            elif char in mappings.keys():
                if not stack or mappings[char] != stack.pop():
                    return False
        return not stack