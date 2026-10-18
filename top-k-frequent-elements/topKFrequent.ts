// https://leetcode.com/problems/top-k-frequent-elements/

export function topKFrequent(nums: number[], k: number): number[] {
  let freqs = new Map<number, number>();

  for (let n of nums) {
    if (freqs.has(n)) {
      freqs.set(n, freqs.get(n)! + 1)
    } else {
      freqs.set(n, 1)
    }
  }

  const sortedTops = Array.from(freqs.entries()).sort((a, b) => {
    return b[1] - a[1];
  }).map((ary) => ary[0]);

  return sortedTops.slice(0, k);
}
