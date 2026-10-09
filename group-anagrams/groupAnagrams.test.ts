import { describe, expect, test } from "bun:test";
import { groupAnagrams } from "./groupAnagrams";

function normalize(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
}

describe("groupAnagrams", () => {
  test("example 1", () => {
    expect(normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))).toEqual(
      normalize([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]),
    );
  });

  test("example 2", () => {
    expect(normalize(groupAnagrams([""]))).toEqual(normalize([[""]]));
  });

  test("example 3", () => {
    expect(normalize(groupAnagrams(["a"]))).toEqual(normalize([["a"]]));
  });

  test("words with the same char-code sum are not anagrams", () => {
    const strs = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"];
    expect(normalize(groupAnagrams(strs))).toEqual(
      normalize(strs.map((s) => [s])),
    );
  });
});
