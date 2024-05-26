class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        # Initialize variables
        chunks = 0
        max_vals = [0] * len(arr)
        min_vals = [0] * len(arr)
        
        # Calculate max_vals array
        max_val = float('-inf')
        for i in range(len(arr)):
            max_val = max(max_val, arr[i])
            max_vals[i] = max_val
        
        # Calculate min_vals array
        min_val = float('inf')
        for i in range(len(arr)-1, -1, -1):
            min_val = min(min_val, arr[i])
            min_vals[i] = min_val
        
        # Count the chunks
        for i in range(len(arr) - 1):
            if max_vals[i] <= min_vals[i + 1]:
                chunks += 1
        # Add 1 for the last chunk
        return chunks + 1
