const cat = {
  sound () {
    console.log('MIAU')
  }
}

const dog = {
  sound () {
    console.log('GUAU')
  }
}

const garfield = Object.create(cat)

console.log(Object.getPrototypeOf(garfield) === cat) // print true

// set as prototype the dog object
Object.setPrototypeOf(garfield, dog)

console.log(Object.getPrototypeOf(garfield) === cat) // print false

const person = {
  sayHi () {
    return 'hello'
  }
}

const friend = {
  sayHi () {
    // Object.getPrototypeOf(this).sayHi.call(this) + ', Hi'
    // super is a reference to the parent prototype object
    return super.sayHi() + ', Hi'
  }
}

Object.setPrototypeOf(friend, person)

console.log(friend.sayHi())
