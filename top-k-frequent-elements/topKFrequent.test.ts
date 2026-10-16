import { describe, expect, test } from "bun:test";
import { topKFrequent } from "./topKFrequent";

function sorted(nums: number[]): number[] {
  return [...nums].sort((a, b) => a - b);
}

describe("topKFrequent", () => {
  test("example 1", () => {
    expect(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual(sorted([1, 2]));
  });

  test("example 2", () => {
    expect(sorted(topKFrequent([1], 1))).toEqual([1]);
  });

  test("example 3", () => {
    expect(sorted(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2))).toEqual(sorted([1, 2]));
  });

  test("most frequent element is zero", () => {
    expect(sorted(topKFrequent([3, 0, 1, 0], 1))).toEqual([0]);
  });
});
