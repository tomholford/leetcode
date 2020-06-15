# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  current_idx = 0
  prev_val = nil

  while current_idx < nums.length
    # delete_at case
    if prev_val == nums[current_idx]
      nums.delete_at(current_idx)
      next
    end

    # do nothing, advance case
    prev_val = nums[current_idx]
    current_idx += 1
  end

  nums.length
end

def test(input, expected)
  puts "input: #{input}"
  puts "expected: #{expected}"

  output = remove_duplicates(input)
  puts "output: #{output}"

  puts output == expected
end

test([1,1,2], 2)
test([0,0,1,1,1,2,2,3,3,4], 5)
