'use strict'

const arrSample = ['abc', 'cba', 'ddd']

function * sampleGenerator (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // The yield operator is used to pause and resume a generator function.
    yield arr[i]
  }
}

const testA = sampleGenerator(arrSample)
testA.next() // output: { value: 'abc', done: false }
testA.next() // output: { value: 'cba', done: false }
testA.next() // output: { value: 'ddd', done: false }
testA.next() // output: { value: undefined, done: true }

function vanillaGenerator (arr) {
  let nextIndex = 0

  return {
    next: () => {
      return {
        value: arr[nextIndex++],
        done: nextIndex < arr.length
      }
    }
  }
}

const testB = vanillaGenerator(arrSample)
testB.next() // output: { value: 'abc', done: true }
testB.next() // output: { value: 'cba', done: true }
testB.next() // output: { value: 'ddd', done: false }

const iterable = ['foo', 'bar', 'baz']
// we access to the iterator of the iterable
const iterator = iterable[Symbol.iterator]()
iterator.next() // { value: 'foo', done: false }
iterator.next() // { value: 'bar', done: false }
iterator.next() // baz
