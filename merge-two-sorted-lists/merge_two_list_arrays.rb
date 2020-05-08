# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

def linked_to_array(root)
  result = []
  return result unless root

  current_node = root
  while current_node.next
    result << current_node.val
    current_node = current_node.next
  end
  result << current_node.val

  result
end

def merge_two_lists(l1, l2)
  a1 = linked_to_array(l1)
  a2 = linked_to_array(l2)
  result = []

  while a1.any? || a2.any? do
    result += a1 and break if a2.empty?
    result += a2 and break if a1.empty?
    result << a1.shift and next if a1.first <= a2.first
    result << a2.shift
  end
  result
end

i1 = [1,2,4]
i2 = [1,3,4]

output = merge_two_lists(i1, i2)
expected = [1, 1, 2, 3, 4, 4]

puts output == expected
