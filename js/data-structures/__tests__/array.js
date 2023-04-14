const CustomArray = require('../array')

test('should get the item by index', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Jorge')

  expect(myArray.length).toBe(2)
  expect(myArray.get(1)).toEqual('Jorge')
})

test('should return undefined if the provided index does not have a value on the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Jorge')

  expect(myArray.length).toBe(2)
  expect(myArray.get(2)).toBeUndefined()
})

test('should add items to the array', () => {
  const myArray = new CustomArray()

  myArray.push('Juan')
  expect(myArray.length).toBe(1)
  expect(myArray.data).toEqual({ 0: 'Juan' })

  myArray.push('Jorge')
  expect(myArray.length).toBe(2)
  expect(myArray.data).toEqual({ 0: 'Juan', 1: 'Jorge' })
})

test('should delete items from the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Chuy')
  myArray.push('Carlos')

  myArray.delete(1)
  expect(myArray.length).toBe(2)
  expect(myArray.data).toEqual({ 0: 'Juan', 1: 'Carlos' })
})

test('should delete the las item of the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Chuy')
  myArray.push('Carlos')

  const deletedItem = myArray.pop(1)
  expect(deletedItem).toBe('Carlos')

  expect(myArray.length).toBe(2)
  expect(myArray.data).toEqual({ 0: 'Juan', 1: 'Chuy' })
})

test('should add an item at the start of the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Chuy')
  const newLength = myArray.unshift('first')

  expect(newLength).toBe(3)
  expect(myArray.data).toEqual({ 0: 'first', 1: 'Juan', 2: 'Chuy' })

  myArray.push('Chicoche')
  myArray.unshift('Other one')

  expect(myArray.data).toEqual({ 0: 'Other one', 1: 'first', 2: 'Juan', 3: 'Chuy', 4: 'Chicoche' })
})

test('should add an item at the start of the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Chuy')
  const newLength = myArray.unshift('first')

  expect(newLength).toBe(3)
  expect(myArray.data).toEqual({ 0: 'first', 1: 'Juan', 2: 'Chuy' })

  myArray.push('Chicoche')
  myArray.unshift('Other one')

  expect(myArray.data).toEqual({ 0: 'Other one', 1: 'first', 2: 'Juan', 3: 'Chuy', 4: 'Chicoche' })
})

test('should delete the first element of the array', () => {
  const myArray = new CustomArray()
  myArray.push('Juan')
  myArray.push('Chuy')
  myArray.push('Dan')
  myArray.shift()

  expect(myArray.length).toBe(2)
  expect(myArray.data).toEqual({ 0: 'Chuy', 1: 'Dan' })

  myArray.push('Another')
  myArray.push('Foo')
  myArray.shift()
  expect(myArray.length).toBe(3)
  expect(myArray.data).toEqual({ 0: 'Dan', 1: 'Another', 2: 'Foo' })
})
