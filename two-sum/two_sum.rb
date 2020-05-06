# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  indices = {}
  nums.each_with_index do |n, i|
    complement = target - n

    return [i, indices[complement]].sort if indices.key?(complement)

    indices[n] = i
  end
end
