require 'strscan'

class CountAndSay
  def initialize; end

  def sequence_member(n)
    return '1' if n == 1

    sequence = sequence_member(n - 1)
    compress(sequence)
  end

  # Convert '112221' to '213211'
  def compress(sequence)
    pattern = /(\d)\1*/
    scanner = StringScanner.new(sequence)
    output = ''

    until scanner.eos?
      chunk = scanner.scan(pattern)
      output << "#{chunk.length}#{chunk.chr}"
    end

    output
  end
end

def count_and_say(n)
  c = CountAndSay.new
  c.sequence_member(n)
end
