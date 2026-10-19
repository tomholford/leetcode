import { describe, expect, test } from "bun:test";
import { canFinish } from "./canFinish";

describe("canFinish", () => {
  test("example 1", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  test("example 2", () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  test("shared later course is not a cycle", () => {
    expect(
      canFinish(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ]),
    ).toBe(true);
  });

  test("self-loop among otherwise separate edges", () => {
    expect(
      canFinish(20, [
        [0, 10],
        [3, 18],
        [5, 5],
        [6, 11],
        [11, 14],
        [13, 1],
        [15, 1],
        [17, 4],
      ]),
    ).toBe(false);
  });
});
