MAP = {
  1000 => 'M',
  500 => 'D',
  100 => 'C',
  50 => 'L',
  10 => 'X',
  5 => 'V',
  1 => 'I'
}.freeze

REPLACEMENTS = {
  'VIIII' => 'IX',
  'IIII' => 'IV',
  'LXXXX' => 'XC',
  'XXXX' => 'XL',
  'DCCCC' => 'CM',
  'CCCC' => 'CD'
}.freeze

# @param {Integer} num
# @return {String}
def int_to_roman(num)
  output = ''

  MAP.each do |val, char|
    while num >= val
      output << char
      num -= val
    end
  end

  REPLACEMENTS.each do |pattern, replacement|
    output.gsub!(pattern, replacement)
  end

  output
end

def test(expected, int)
  result = int_to_roman(int)
  puts "expected: #{expected}"
  puts "result: #{result}"
  puts expected == result
end

test('III', 3)
test('IV', 4)
test('IX', 9)
test('LVIII', 58)
test('MCMXCIV', 1994)
