require 'set'

# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  left = 0
  right = 0
  output = 0
  set = Set.new

  while right < s.length
    if !set.include?(s[right])
      set.add(s[right])
      output = [output, set.size].max
      right += 1
    else
      set.delete(s[left])
      left += 1
    end
  end

  output
end

def test(input, expected)
  puts "input: #{input}"
  puts "expected: #{expected}"

  output = length_of_longest_substring(input)
  puts "output: #{output}"

  puts output == expected
end

test('abcabcbb', 3)
test('bbbbb', 1)
test('pwwkew', 3)
