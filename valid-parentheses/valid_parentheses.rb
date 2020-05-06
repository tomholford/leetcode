OPEN = ['(', '[', '{'].freeze
CLOSE = [')', ']', '}'].freeze
MAP = Hash[OPEN.zip(CLOSE)].freeze

# @param {String} s
# @return {Boolean}
def is_valid(s)
  stack = []

  s.scan /\W/ do |c|
    if stack.empty? || OPEN.include?(c)
      stack << c
    elsif CLOSE.include?(c) && MAP[stack.last] == c
      stack.pop
    else
      return false
    end
  end

  stack.empty?
end

p is_valid '()'
p is_valid '([])'
p is_valid '(]'
p is_valid '([)]'
p is_valid '('