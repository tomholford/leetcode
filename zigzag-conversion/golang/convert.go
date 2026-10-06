// https://leetcode.com/problems/zigzag-conversion/

package main

import "strings"

func convert(s string, numRows int) string {
	if (numRows == 1) { return s };

	c := 0;
	cycleLength := 2 * (numRows - 1);
	zigzag := make([]string, numRows);

	for (c < len(s)) {
		offset := c % cycleLength;
		var row int;
		if offset < numRows { row = offset }  else { row = cycleLength - offset };
		zigzag[row] += string(s[c]);
		c++;
	}

	return strings.Join(zigzag, "")
}
