'use strict'

// The time complexity for this solution is linear - O(n),
// because we run the loop from 2 to n.
function fibonacciA (n) {
  const nums = [0, 1]
  let a = 0
  let b = 1
  let c = 1

  for (let i = 2; i <= n; i += 1) {
    c = a + b
    nums.push(c)

    a = b
    b = c
  }

  return { sum: c, sequence: nums }
}

fibonacciA(10)

// complexity is O(n).
function fibonacciB (n) {
  if (n <= 1) {
    return n
  }

  const result = [0, 1]

  for (let i = 2; i <= n; i += 1) {
    // the i position is equal to the sum of the 2 previous positions
    result[i] = result[i - 2] + result[i - 1]
  }

  return result
}

fibonacciB(10)

// The time complexity for this solution is exponential - O(2^n)
function fibonacciC (n) {
  if (n <= 1) return n
  return fibonacciC(n - 2) + fibonacciC(n - 1)
}

fibonacciC(3)

function getFibonacciIndex (n) {
  let a = 0
  let b = 1
  let c = 1 // current value on the sequence [0, 1, 1, 2, 3, 5]
  let index = 1
  const sequence = [0, 1]

  while (c < n) {
    c = a + b
    a = b
    b = c
    index += 1
    sequence.push(c)
  }

  return { index, sequence }
}

getFibonacciIndex(55)

// recursive example with memoization
const cache = {}
const fibonacci = n => {
  if (n <= 1) {
    return n
  }

  if (cache[n]) {
    return cache[n]
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2)
  cache[n] = result

  return result
}
