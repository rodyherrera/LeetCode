class Solution:
    def rectangleArea(self, rectangles: List[List[int]]) -> int:
        MOD = 10**9 + 7
        x_coords = set()
        for rect in rectangles:
            x_coords.add(rect[0])
            x_coords.add(rect[2])
        x_coords = sorted(list(x_coords))
        events = []
        for x in x_coords:
            for rect in rectangles:
                if rect[0] <= x < rect[2]:
                    events.append((rect[1], 1))
                    events.append((rect[3], -1))
            events.sort()
            prev_y = events[0][0]
            count = 0
            total_area = 0
            for y, event_type in events:
                if count > 0:
                    total_area += (y - prev_y) * (x - prev_x)
                    total_area %= MOD
                if event_type == 1:
                    count += 1
                else:
                    count -= 1
                prev_y = y
            prev_x = x
        return total_area