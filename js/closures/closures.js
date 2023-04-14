// A closure is a combination between a function and the lexical environment
// where the function was declared. Every time a function is created, a closure is created.
// You can understand closures as: inner function + scope.

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
