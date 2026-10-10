// https://leetcode.com/problems/group-anagrams/

package main

import (
	"strconv"
	"strings"
)

const azOffset = 97

func groupAnagrams(strs []string) [][]string {
	anagrams := make(map[string][]string)

	for _, s := range strs {
		var counts [26]int
		chars := strings.Split(s, "")
		for _, c := range chars {
			azIdx := c[0] - azOffset
			counts[azIdx] = counts[azIdx] + 1
		}
		keyChars := make([]string, len(counts))
		for i, count := range counts {
			keyChars[i] = strconv.Itoa(count)
		}
		key := strings.Join(keyChars, ",")
		anagrams[key] = append(anagrams[key], s)
	}

	var result [][]string
	for _, v := range anagrams {
		result = append(result, v)
	}

	return result
}
