import heapq

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        # Combine capital and profit and sort by capital
        projects = sorted(zip(capital, profits))
        # Max heap to store available projects sorted by profit
        available_projects = []
        # Index to track the current project
        idx = 0
        n = len(projects)
        for _ in range(k):
            # Add available projects whose capital requirements are met
            while idx < n and projects[idx][0] <= w:
                # Push negative profit for max heap
                heapq.heappush(available_projects, -projects[idx][1])
                idx += 1
            # If no more proejcts available
            if not available_projects:
                break
            # Deduct capital and add profit
            w -= heapq.heappop(available_projects)
        return w