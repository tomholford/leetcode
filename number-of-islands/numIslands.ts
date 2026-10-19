// https://leetcode.com/problems/number-of-islands/

export function numIslands(grid: string[][]): number {
  let x = 0;
  let y = 0;
  let islandCount = 0;
  const height = grid.length;
  const width = grid[0].length;

  let claimed: boolean[][] = Array.from({ length: height }, () => 
    Array.from({ length: width }, () => false)
  );

  while (y < grid.length) {
    while (x < grid[0].length) {
      if (grid[y][x] === '1') {
        if (!claimed[y][x]) {
          islandCount += 1;

          // claim and walk the surrounding tiles
          let candidates: Array<[number, number]> = [[x, y]];
          while (candidates.length > 0) {
            const c = candidates.pop()!;
            const cX = c[0];
            const cY = c[1];
            
            claimed[cY][cX] = true;

            // right
            if (cX + 1 < width && grid[cY][cX + 1] === '1' && !claimed[cY][cX + 1]) {
              candidates.push([cX + 1, cY])
            }
            // down
            if (cY + 1 < height && grid[cY + 1][cX] === '1' && !claimed[cY + 1][cX]) {
              candidates.push([cX, cY + 1])
            }
            // left
            if (cX - 1 >= 0 && grid[cY][cX - 1] === '1' && !claimed[cY][cX - 1]) {
              candidates.push([cX - 1, cY])
            }
            // up
            if (cY - 1 >= 0 && grid[cY - 1][cX] === '1' && !claimed[cY - 1][cX]) {
              candidates.push([cX, cY - 1])
            }
          }
        }
      }
      x++;
    }
    x = 0;
    y++;
  }

  return islandCount;
}
