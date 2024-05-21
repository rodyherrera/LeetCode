class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points: return 0
        # Sort the balloons based on their ending positions
        points.sort(key=lambda x: x[1])
        arrows = 1
        end = points[0][1]
        # Iterate through the sorted balloons
        for balloon in points[1:]:
            # If the starting position of the current balloon is greater than the current end position,
            # a new arrow is needed to burst it
            if balloon[0] > end:
                arrows += 1
                # Update the current end position
                end = balloon[1]
        return arrows