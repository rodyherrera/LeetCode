from collections import defaultdict, deque

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = defaultdict(list)
        in_degree = [0] * numCourses
        for course, pre_course in prerequisites:
            graph[pre_course].append(course)
            in_degree[course] += 1
        queue = deque([course for course in range(numCourses) if in_degree[course] == 0])
        courses_taken = 0
        while queue:
            course = queue.popleft()
            courses_taken += 1
            for next_course in graph[course]:
                in_degree[next_course] -= 1
                if in_degree[next_course] == 0:
                    queue.append(next_course)
        return courses_taken == numCourses