# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  return 0 if s.empty?

  current_idx = 0
  output = 0
  memo = nil
  chars = s.split('')

  while current_idx < chars.length
    memo = []

    chars[current_idx..-1].each do |c|
      break if memo.include?(c)

      memo << c
    end

    output = memo.length if memo.length > output
    current_idx += 1
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
