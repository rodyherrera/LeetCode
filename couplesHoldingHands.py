class Solution:
    def minSwapsCouples(self, row):
        # Initialize a variable to count the number of swaps
        swaps = 0
        # Iterate over the couples
        for i in range(0, len(row), 2):
            # Find the partner of the current person
            partner = row[i] ^1
            # If the partner is not sitting next to the current person
            if row[i + 1] != partner:
                # Find the index of the partner in the row
                j = row.index(partner)
                # Swap the partner with the next person
                row[i + 1], row[j] = row[j], row[i + 1]
                # Incrment swap count
                swaps += 1
        return swaps