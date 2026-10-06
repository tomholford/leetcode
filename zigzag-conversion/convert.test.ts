import { describe, expect, test } from "bun:test";
import { convert } from "./convert";

describe("convert", () => {
  test("example 1", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  test("example 2", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  test("example 3", () => {
    expect(convert("A", 1)).toBe("A");
  });

  // a  g
  // b fh
  // ce i
  // d  j
  
  test("example 4", () => {
    expect(convert("ABCDEFGHIJ", 4)).toBe("AGBFHCEIDJ");
  });

  // A C
  // B D
  test("two rows", () => {
    expect(convert("ABCD", 2)).toBe("ACBD");
  });
});
