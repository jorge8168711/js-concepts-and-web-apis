'use strict'

class Node {
  constructor (value, prev = null) {
    this.value = value
    this.next = null
    this.prev = prev
  }
}

export default class DoublyLinkedList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  // add an item at the end of the list
  append (value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode

    this.length += 1
    return this
  }

  // add an item at the start of the list
  prepend (value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }

  insert (index, value) {
    if (!value) return

    if (index >= this.length) {
      return this.append(value)
    }

    // the element in which I want to insert the data
    const firstPointer = this.lookup(index - 1)
    if (firstPointer) {
    // the newNode is created
      const newNode = new Node(value)

      // we backup the next and prev values from the first node
      const prevHoldingPointer = firstPointer
      const nextHoldingPointer = firstPointer.next

      // then we set the newNode on the firstPointer.next
      firstPointer.next = newNode

      // on the newNode we set the next and prev values
      newNode.prev = prevHoldingPointer
      newNode.next = nextHoldingPointer

      nextHoldingPointer.prev = newNode

      // this means that the new node was inserted at the tail
      // then we need to set the tail with the new node
      if (newNode.next === null) {
        this.tail = newNode
      }

      this.length += 1
      return this
    }
  }

  lookup (index) {
    let currentNode = this.head
    let counter = 0
    if (index < 0 || index >= this.length) return null

    while (counter !== index) {
      counter += 1
      currentNode = currentNode.next
    }

    return currentNode
  }

  delete (index) {
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
      this.length -= 1
      return this
    }

    const firstNode = this.lookup(index - 1)
    const secondNode = this.lookup(index)
    const secondNodePrev = secondNode.prev
    firstNode.next = secondNode.next
    firstNode.next.prev = secondNodePrev

    this.length -= 1
    return this
  }
}

// const dslList = new DoublyLinkedList(1)
// dslList.append(2)
// dslList.append(3)
// dslList.delete(1)
