// https://leetcode.com/problems/zigzag-conversion/

export function convert(s: string, numRows: number): string {
  if (numRows == 1) return s;

  const cycleLength = 2 * (numRows - 1);
  let c = 0; // current index
  let zigzag: Array<string> = new Array(numRows);
  for (let i = 0; i < zigzag.length; i++) {
    zigzag[i] = '';
  }

  while (c < s.length) {
    const offset = c % cycleLength;

    const row = offset < numRows ? offset : cycleLength - offset;
    zigzag[row] = zigzag[row] + s[c]
    c++;
  }

  return zigzag.join('');
}
