# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  output = ''
  return output if strs.empty? || strs.any? { |s| s == '' }

  splits = strs.map { |s| s.split('') }
  splits.sort_by!(&:length)

  until splits.first.empty? do
    current = splits.first.first

    break unless splits.all? { |a| a.shift == current }

    output << current
  end

  output
end

input = ["flower","flow","flight"]
puts "fl" == longest_common_prefix(input)

input = ["a"]
puts "a" == longest_common_prefix(input)

input = []
puts "" == longest_common_prefix(input)

input = [""]
puts "" == longest_common_prefix(input)

input = ["dog","racecar","flight"]
puts "" == longest_common_prefix(input)

input = ["c","acc","ccc"]
puts "" == longest_common_prefix(input)

input = ["aca","cba"]
puts "" == longest_common_prefix(input)
