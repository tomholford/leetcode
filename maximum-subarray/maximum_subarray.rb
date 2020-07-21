class MaximumSubarray
  attr_reader :nums

  def initialize(nums)
    @nums = nums
  end

  def largest_sum
    max_sum = -Float::INFINITY
    current_sum = 0

    nums.each do |n|
      current_sum = [n, current_sum + n].max
      max_sum = [max_sum, current_sum].max
    end

    max_sum
  end
end

# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  ms = MaximumSubarray.new(nums)

  ms.largest_sum
end
