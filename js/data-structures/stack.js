/*
  STACK (LIFO - last in first out)

  ┌──────────────────────────────┐
  │                              │
  │                              │
  │                              │
  │                              │
  │ ┌──────────────────────────┐ │
  │ │The last one in the stack │ │
  │ │is the first one out      │ │
  │ └──────────────────────────┘ │
  │                              │
  │ ┌──────────────────────────┐ │
  │ │  value                   │ │
  │ │  next                    │ │
  │ └──────────────────────────┘ │
  │                              │
  │ ┌──────────────────────────┐ │
  │ │                          │ │
  │ │                          │ │
  │ └──────────────────────────┘ │
  │                              │
  └──────────────────────────────┘
*/

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export default class Stack {
  constructor () {
    this.top = null
    this.last = null
    this.length = 0
  }

  // remove the last item in the stack
  pop () {
    const currentTop = this.top
    this.top = this.top.next
    this.length -= 1

    return currentTop
  }

  // add an item to the stack
  push (value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const currentTop = this.top
      this.top = newNode
      this.top.next = currentTop
    }

    this.length += 1
    return this
  }

  // take the last item in the stack
  peek () {
    return this.top
  }
}
