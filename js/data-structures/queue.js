/*
  FIFO Principle of Queue:
  A Queue is like a line waiting to purchase tickets, where the
  first person in line is the first person served. (i.e. First come first serve).

               ┌───┬───┬───┬───┬───┬───┬───┬───┐
               │   │   │   │   │   │   │   │   │
Enqueue() ───► │   │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │   │ ───► Dequeue()
               └───┴─┬─┴───┴───┴───┴───┴─┬─┴───┘
                     │                   │
                   Rear                Front
 */

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class Queue {
  constructor () {
    this.front = null
    this.rear = null
    this.length = 0
  }

  // add element at the end of the queue
  enqueue (value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.front = newNode
      this.rear = newNode
    } else {
      this.rear.next = newNode
      this.rear = newNode
    }

    this.length += 1
    return this
  }

  // remove element from the front of the queue
  dequeue () {
    if (!this.length) return
    if (this.length === 1) {
      this.front = null
      this.rear = null
    } else {
      this.front = this.front.next
    }

    this.length -= 1
    return this
  }

  // take the first item in the queue
  peek () {
    return this.front
  }
}

const q = new Queue()
