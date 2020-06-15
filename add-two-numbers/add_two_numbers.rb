# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def list_to_int(l)
  output = 0
  power = 0

  while true
    output += (l.val * 10**power)
    break unless l.next

    l = l.next
    power += 1
  end

  output
end

def int_to_list(i)
  l = i.to_s.split('').reverse.map(&:to_i)

  l
end

def add_two_numbers(l1, l2)
  i1 = list_to_int(l1)
  i2 = list_to_int(l2)
  sum = i1 + i2

  int_to_list(sum)
end
