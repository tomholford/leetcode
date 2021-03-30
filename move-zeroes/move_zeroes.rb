class MoveZeroes
  attr_accessor :nums

  def initialize(nums)
    @nums = nums
  end

  def run
    idx = 0
    zeroes = 0
  
    while idx < nums.length - 1
      current = nums[idx]

      if current == 0
        nums.delete_at(idx)
        zeroes += 1

        next
      end
  
      idx += 1
    end
  
    nums.concat(Array.new(zeroes).fill(0))
  end
end

def move_zeroes(nums)
  mz = MoveZeroes.new(nums)

  mz.run
end
