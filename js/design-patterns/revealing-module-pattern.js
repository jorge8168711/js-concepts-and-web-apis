// A variation of the module pattern is called the Revealing Module Pattern.
// The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal.
// The direct implementation looks like this:

const Exposer = (() => {
  const privateVariable = 10
  const varToExpose = 20
  const privateMethod = () => {}
  const methodToExpose = () => console.log('methodToExpose')

  console.log({ privateVariable, privateMethod })

  return { first: methodToExpose, second: varToExpose }
})()

Exposer.first() // Output: This is a method I want to expose!
// Exposer.second // Output: Inside a private method!
// Exposer.methodToExpose // undefined
