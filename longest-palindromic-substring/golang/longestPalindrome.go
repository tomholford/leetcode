// https://leetcode.com/problems/longest-palindromic-substring/

package main

func longestPalindrome(s string) string {
	length := len(s)
	if length == 1 {
		return s
	}

	expand := func(left int, right int) (int, int) {
		for left >= 0 && right < length && s[left] == s[right] {
			left--
			right++
		}

		return left + 1, right - 1
	}

	start := 0
	end := 0

	for i := range length {
		oddStart, oddEnd := expand(i, i)
		evenStart, evenEnd := expand(i, i+1)

		if oddEnd-oddStart > end-start {
			start = oddStart
			end = oddEnd
		}
		if evenEnd-evenStart > end-start {
			start = evenStart
			end = evenEnd
		}
	}

	return s[start : end+1]
}
