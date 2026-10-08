package main

import "testing"

func TestLongestPalindrome(t *testing.T) {
	tests := []struct {
		name string
		s    string
		want []string
	}{
		{name: "example 1", s: "babad", want: []string{"bab", "aba"}},
		{name: "example 2", s: "cbbd", want: []string{"bb"}},
		{name: "single character", s: "a", want: []string{"a"}},
		{name: "no multi-character palindrome", s: "ac", want: []string{"a", "c"}},
		{name: "whole string, odd length", s: "racecar", want: []string{"racecar"}},
		{name: "whole string, even length", s: "abba", want: []string{"abba"}},
		{name: "whole string, length 2", s: "bb", want: []string{"bb"}},
		{name: "longest is right of center", s: "eabcb", want: []string{"bcb"}},
		{name: "longest is a suffix", s: "abb", want: []string{"bb"}},
		{name: "longest is a prefix", s: "ccd", want: []string{"cc"}},
		{name: "longest is interior", s: "bananas", want: []string{"anana"}},
		{name: "digits", s: "12321", want: []string{"12321"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := longestPalindrome(tt.s)
			for _, w := range tt.want {
				if got == w {
					return
				}
			}
			t.Errorf("longestPalindrome(%q) = %q, want one of %q", tt.s, got, tt.want)
		})
	}
}
