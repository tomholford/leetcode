import { describe, expect, test } from "bun:test";
import { numIslands } from "./numIslands";

describe("numIslands", () => {
  test("example 1", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test("example 2", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  test("example 3", () => {
    const grid = [
      ["1", "1", "1"],
      ["0", "1", "0"],
      ["1", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(1);
  })
});
