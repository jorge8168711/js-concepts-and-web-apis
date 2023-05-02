'use strict'

function anotherCounter (initialCount = 0) {
  let count = initialCount

  return function increase (incremental = 1) {
    count = count + incremental
    return count
  }
}

const bar = anotherCounter()
bar(2)
bar(4)
bar(5)

function counter (initialCount = 0) {
  let count = initialCount

  function increase (incremental = 1) {
    count = count + incremental
    return count
  }

  function getCount () {
    return count
  }

  return {
    getCount,
    increase
  }
}

const firstCounter = counter()
/*
  Iterable objects are a generalization of arrays. That’s a concept that allows us
  to make any object useable in a for..of loop.
  https://javascript.info/iterable

  Making an object iterable:
*/

const range = {
  from: 1,
  to: 5
}

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

// To make the range object iterable (and thus let for..of work)
// we need to add a method to the object named Symbol.iterator
// (a special built-in symbol just for that).

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next () {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}

// now it works!
for (const num of range) {
  console.log(num) // 1, then 2, 3, 4, 5
}

const range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator] () {
    this.current = this.from
    return this
  },

  next () {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    } else {
      return { done: true }
    }
  }
}

for (const num of range2) {
  console.log(num) // 1, then 2, 3, 4, 5
}

const iterable = ['foo', 'bar', 'baz']
// we access to the iterator of the iterable
const iterator = iterable[Symbol.iterator]()

iterator.next() // { value: 'foo', done: false }
iterator.next() // { value: 'bar', done: false }
iterator.next() // baz
