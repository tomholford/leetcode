# @param {Integer} x
# @return {Integer}
MAX = 2147483647
MIN = -2147483648

def reverse(x)
  pieces = x.to_s.split('')  
  is_negative = pieces.include?('-')
  result = pieces.reverse.join('').to_i
  result *= -1 if is_negative

  result < MIN || result > MAX ? 0 : result
end
