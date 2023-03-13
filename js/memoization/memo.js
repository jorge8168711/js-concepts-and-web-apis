// MEMOIZATION: a performance optimization technique which eliminates the need to recompute a value
// for a given input by storing the original computation and returning that stored value when
// the same input is provided. Memoization is a form of caching. Here's a simple implementation
// of memoization:

class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}


const values = {}
function addOne(num) {
  if (values[num] === undefined) {
    values[num] = num + 1 // <-- here's the computation
  }
  return values[num]
}


const dogs = {}
function getDog(name) {
  if (dogs[name] === undefined) {
    dogs[name] = new Dog(name)
  }
  return dogs[name]
}

const dog1 = getDog('sam')
const dog2 = getDog('sam')
console.log(dog1 === dog2) // true


// generic abstraction
function memoize(callback) {
  const cache = {}

  console.log({cache})
  return function memoized(arg) {
    if (cache[arg] === undefined) {
      cache[arg] = callback(arg)
    }
    return cache[arg]
  }
}

const memo1 = memoize((num) => num + 1)
const memo2 = memoize((name) => new Dog(name))

console.log(memo1(1), memo2('a name'))
console.log(memo1(4), memo2('another dog'))
