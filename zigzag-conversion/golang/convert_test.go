package main

import "testing"

func TestConvert(t *testing.T) {
	tests := []struct {
		name    string
		s       string
		numRows int
		want    string
	}{
		{name: "example 1", s: "PAYPALISHIRING", numRows: 3, want: "PAHNAPLSIIGYIR"},
		{name: "example 2", s: "PAYPALISHIRING", numRows: 4, want: "PINALSIGYAHRPI"},
		{name: "example 3", s: "A", numRows: 1, want: "A"},
		{name: "example 4", s: "ABCDEFGHIJ", numRows: 4, want: "AGBFHCEIDJ"},
		{name: "two rows", s: "ABCD", numRows: 2, want: "ACBD"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := convert(tt.s, tt.numRows); got != tt.want {
				t.Errorf("convert(%q, %d) = %q, want %q", tt.s, tt.numRows, got, tt.want)
			}
		})
	}
}
