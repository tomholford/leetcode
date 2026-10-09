// https://leetcode.com/problems/longest-palindromic-substring/

export function longestPalindrome(s: string): string {
  const len = s.length;
  if (len === 1) {
    return s;
  }

  // longest seen indices
  let start = 0;
  let end = 0;

  // expand to find pal
  const expand = (left: number, right: number): [number, number] => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }

    return [left + 1, right - 1];
  }

  for (let i = 0; i < len; i++) {
    const odd = expand(i, i);
    const even = expand(i, i + 1);

    if (odd[1] - odd[0] > end - start) {
      start = odd[0];
      end = odd[1];
    }

    if (even[1] - even[0] > end - start) {
      start = even[0];
      end = even[1];
    }
  }

  return s.slice(start, end + 1);
}
