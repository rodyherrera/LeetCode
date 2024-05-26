from collections import defaultdict

class WordFilter:
    def __init__(self, words: List[str]):
        self.prefix_suffix_map = defaultdict(list)
        for index, word in enumerate(words):
            n = len(word)
            for i in range(n + 1):
                prefix = word[:i]
                for j in range(n, -1, -1):
                    suffix = word[j:]
                    self.prefix_suffix_map[prefix + '#' + suffix].append(index)
    def f(self, pref: str, suff: str) -> int:
        key = pref + '#' + suff
        if key in self.prefix_suffix_map:
            return max(self.prefix_suffix_map[key])
        return -1