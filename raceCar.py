from collections import deque


class Solution:
    def racecar(self, target: int) -> int:
        queue = deque([(0, 1)])
        visited = set([(0, 1)])
        steps = 0
        
        while queue:
            for _ in range(len(queue)):
                position, speed = queue.popleft()
                new_position_a = position + speed
                new_speed_a = speed * 2
                if new_position_a == target:
                    return steps + 1
                if (new_position_a, new_speed_a) not in visited and abs(new_position_a) < 2 * target:
                    queue.append((new_position_a, new_speed_a))
                    visited.add((new_position_a, new_speed_a))
                new_speed_r = -1 if speed > 0 else 1
                if (position, new_speed_r) not in visited and abs(new_speed_r) < 2 * target:
                    queue.append((position, new_speed_r))
                    visited.add((position, new_speed_r))
            steps += 1
        return -1