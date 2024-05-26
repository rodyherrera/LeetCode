class Solution:
    def makeLargestSpecial(self, s: str) -> str:
        def makeSpecial(s: str) -> str:
            if s == '1' or s == '0':
                return s
            count, i = 0, 0
            substrings = []
            for j, char in enumerate(s):
                count = count + 1 if char == '1' else count - 1
                if count == 0:
                    substrings.append('1' + makeSpecial(s[i + 1:j]) + '0')
                    i = j + 1
            substrings.sort(reverse=True)
            return ''.join(substrings)
        return makeSpecial(s)