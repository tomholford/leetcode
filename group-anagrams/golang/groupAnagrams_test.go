package main

import (
	"reflect"
	"slices"
	"strings"
	"testing"
)

func normalize(groups [][]string) [][]string {
	out := make([][]string, len(groups))
	for i, group := range groups {
		sorted := slices.Clone(group)
		slices.Sort(sorted)
		out[i] = sorted
	}
	slices.SortFunc(out, func(a, b []string) int {
		return strings.Compare(strings.Join(a, "\x00"), strings.Join(b, "\x00"))
	})
	return out
}

func TestGroupAnagrams(t *testing.T) {
	tests := []struct {
		name string
		strs []string
		want [][]string
	}{
		{
			name: "example 1",
			strs: []string{"eat", "tea", "tan", "ate", "nat", "bat"},
			want: [][]string{{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}},
		},
		{
			name: "example 2",
			strs: []string{""},
			want: [][]string{{""}},
		},
		{
			name: "example 3",
			strs: []string{"a"},
			want: [][]string{{"a"}},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := groupAnagrams(tt.strs)
			if !reflect.DeepEqual(normalize(got), normalize(tt.want)) {
				t.Errorf("groupAnagrams(%q) = %q, want %q", tt.strs, got, tt.want)
			}
		})
	}
}
