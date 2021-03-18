import reverseLinkedList, { ListNode } from './reverseLinkedList';

describe('#reverseLinkedList', () => {
  describe('a single node', () => {
    it('returns the same node', () => {
      const head: ListNode = {
        val: 0,
        next: null
      }

      expect(reverseLinkedList(head)).toEqual(head)
    })
  })

  describe('three nodes', () => {
    it('returns the reversed linked list', () => {
      const tail: ListNode = {
        val: 2,
        next: null
      }
      const middle: ListNode = {
        val: 1,
        next: tail
      }
      const head: ListNode = {
        val: 0,
        next: middle
      }

      expect(reverseLinkedList(head)).toEqual(tail)
    })
  })
})
