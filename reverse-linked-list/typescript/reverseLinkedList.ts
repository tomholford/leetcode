/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export type ListNode = {
  val: number,
  next: ListNode | null
}

export default function reverseList(head: ListNode | null): ListNode | null {
  let stack: ListNode[] = [];
  let nextNode: ListNode | null = head;

  while (true) {
    if(nextNode === null) { break }
    stack.push(nextNode);
    nextNode = nextNode.next;
  }

  let newHead: ListNode | null = null;
  let currentNode: ListNode | null = null;

  while(stack.length > 0) {
    const popped = stack.pop();
    if(newHead === null) {
      newHead = popped!;
      currentNode = newHead
      continue
    }

		currentNode!.next = popped!
		currentNode = currentNode!.next
		currentNode!.next = null
  }

  return newHead;
};
