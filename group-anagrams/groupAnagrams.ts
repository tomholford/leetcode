// https://leetcode.com/problems/group-anagrams/

const azOffset = 97; // 'a'.charCodeAt(0)

export function groupAnagrams(strs: string[]): string[][] {
  let anagrams: Map<string, string[]> = new Map();

  for (const s of strs) {
    let counts = new Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i) - azOffset]++;
    }

    const countKey = counts.join(',')

    if (anagrams.has(countKey)) {
      anagrams.get(countKey)?.push(s)
    } else {
      anagrams.set(countKey, [s])
    }
  }
  
  return [...anagrams.values()];
}
