import { describe, expect, test } from "bun:test";
import { longestPalindrome } from "./longestPalindrome";

describe("longestPalindrome", () => {
  test("example 1", () => {
    // "aba" is also a valid answer
    expect(["bab", "aba"]).toContain(longestPalindrome("babad"));
  });

  test("example 2", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  test("single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test("no multi-character palindrome", () => {
    expect(["a", "c"]).toContain(longestPalindrome("ac"));
  });

  test("whole string, odd length", () => {
    expect(longestPalindrome("racecar")).toBe("racecar");
  });

  test("whole string, even length", () => {
    expect(longestPalindrome("abba")).toBe("abba");
  });

  test("whole string, length 2", () => {
    expect(longestPalindrome("bb")).toBe("bb");
  });

  test("longest is right of center", () => {
    expect(longestPalindrome("eabcb")).toBe("bcb");
  });

  test("longest is a suffix", () => {
    expect(longestPalindrome("abb")).toBe("bb");
  });

  test("longest is a prefix", () => {
    expect(longestPalindrome("ccd")).toBe("cc");
  });

  test("longest is interior", () => {
    expect(longestPalindrome("bananas")).toBe("anana");
  });

  test("digits", () => {
    expect(longestPalindrome("12321")).toBe("12321");
  });
});
