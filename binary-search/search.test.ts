import { describe, expect, test } from "bun:test";
import { search } from "./search";

describe("search", () => {
  test("example 1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("example 2", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
