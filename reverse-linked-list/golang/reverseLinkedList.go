package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	var stack []ListNode
	nextNode := head

	for {
		if nextNode == nil {
			break
		}
		stack = append(stack, *nextNode)
		nextNode = nextNode.Next
	}

	var newHead *ListNode
	var currentNode *ListNode

	for len(stack) > 0 {
		var popped ListNode
		popped, stack = stack[len(stack)-1], stack[:len(stack)-1]

		if newHead == nil {
			newHead = &ListNode{popped.Val, nil}
			currentNode = newHead
			continue
		}

		currentNode.Next = &popped
		currentNode = currentNode.Next
		currentNode.Next = nil
	}

	return newHead
}

func main() {
	fmt.Println("Placeholder")
}
