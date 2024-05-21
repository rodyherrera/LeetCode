class Solution:
    def is_subsequence(self, s: str, t: str) -> bool:
        i, j = 0, 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)
    
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        longest_word = ''
        for word in dictionary:
            if self.is_subsequence(word, s):
                if len(word) > len(longest_word) or (len(word) == len(longest_word) and word < longest_word):
                    longest_word = word
        return longest_word