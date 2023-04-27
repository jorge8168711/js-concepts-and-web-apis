'use strict'
/*
  linked list

  head              Tail
  ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ 3 ├─►10 ├─► 1 ├─► 7 ├───►null
  └───┘ └───┘ └───┘ └───┘

  A singly linked list is a linear data structure in which the
  elements are not stored in contiguous memory locations and each
  element is connected only to its next element using a pointer.

  Methods:
    Prepend ⇒ Add node to the beginning of the list
    Append ⇒ Add node to the end of the list
    Lookup / Search ⇒ search for a node in the list
    Insert ⇒ Inset a node in a specific position
    Delete ⇒ Delete a node in a specific position

   ┌────┐  ┌────┐  ┌────┐  ┌────┐
   │    │  │    │  │    │  │    │
   │ 3  │  │ 10 │  │ 1  │  │ 7  │
   └─┬──┘  └▲──┬┘  └▲──┬┘  └▲─┬─┘
     │      │  │    │  │    │ │
    next────┘next───┘next───┘next──────► null
*/

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }

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

    // the newNode is created
    const firstPointer = this.lookup(index - 1)
    if (firstPointer) {
      const newNode = new Node(value)
      const holdingPointer = firstPointer.next
      // then we set the newNode on the firstPointer.next
      firstPointer.next = newNode
      // we backup the next value from the found node
      // on the newNode
      newNode.next = holdingPointer

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
      this.length -= 1
      return this
    }

    const firstNode = this.lookup(index - 1)
    const secondNode = this.lookup(index)
    firstNode.next = secondNode.next
    this.length -= 1
    return this
  }
}

const slList = new SinglyLinkedList(1)
slList.append(2)
slList.append(3)
slList.append(8)

slList.delete(3)
