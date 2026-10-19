// https://leetcode.com/problems/course-schedule/

export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  const tracks = new Map<number, number[]>();
  for (const [course, prereq] of prerequisites) {
    const waiting = tracks.get(prereq) ?? [];
    waiting.push(course);
    tracks.set(prereq, waiting);
  }

  const finished = new Set<number>();

  const dfs = (start: number): boolean => {
    const path = new Set<number>();

    const visit = (course: number): boolean => {
      if (path.has(course)) return false;
      if (finished.has(course)) return true;

      path.add(course);
      for (const next of tracks.get(course) ?? []) {
        if (!visit(next)) return false;
      }
      path.delete(course);
      finished.add(course);
      return true;
    };

    return visit(start);
  };

  for (let course = 0; course < numCourses; course++) {
    if (finished.has(course)) continue;
    if (!dfs(course)) return false;
  }

  return true;
}
