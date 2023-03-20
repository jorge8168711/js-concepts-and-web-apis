// To create a new primitive Symbol, you write Symbol() with an optional string as its description,
// the symbols doesn't have a constructor
// const sym = new Symbol(); // TypeError

const firstName = Symbol('first name')
const secondName = Symbol('second name')

const person = {
  [firstName]: 'A name'
}

// the property can't be accessed like this
// person.firstName = 'another name'

// has to be accessed using square brackets notation
person[firstName] = 'another name'

// this primitive values are always different
// Symbol('foo') === Symbol('foo') // false

// Searches for existing Symbols with the given key and
// returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with key.
const userID = Symbol.for('userId')
const obj = {
  [userID]: 'ddd'
}

const userId2 = Symbol.for('userId')
// both elements are using the same symbol
console.log(userID === userId2) // print true

// The Symbol.keyFor() static method retrieves a shared symbol key from the global
// symbol registry for the given symbol.
console.log(Symbol.keyFor(userId2))
// Expected output: "userId"

const id = Symbol('id')
const active = Symbol('active')

const user = {
  [id]: 11,
  [active]: true,
  age: 20
}

// this only considers the not symbols keys
// in this case age
for (const key in user) {
  console.log(key, user[key])
}

// to get the symbols we use the following code
const symbols = Object.getOwnPropertySymbols(user)
for (const key in symbols) {
  console.log(key, user[key])
}
