// https://leetcode.com/problems/group-anagrams/

package main

const azOffset = 97

func groupAnagrams(strs []string) [][]string {
	anagrams := make(map[[26]byte][]string)

	for _, s := range strs {
		var counts [26]byte
		for i, _ := range s {
			azIdx := s[i] - azOffset
			counts[azIdx] = counts[azIdx] + 1
		}

		anagrams[counts] = append(anagrams[counts], s)
	}

	var result [][]string
	for _, v := range anagrams {
		result = append(result, v)
	}

	return result
}
