const HashTable = require('../hash-tables')

test('should build a hash table with an specific size', () => {
  const myHashTable = new HashTable(50)
  expect(myHashTable.showData().length).toBe(50)
})

describe('add addresses to the table', () => {
  const myHashTable = new HashTable(50)
  // we add items to the hash table
  myHashTable.set('Diego', 1990)
  myHashTable.set('Mariana', 2000)
  myHashTable.set('Javier', 2000)

  // we get the addresses for each item
  const address1 = myHashTable.hashMethod('Diego')
  const address2 = myHashTable.hashMethod('Mariana')
  const address3 = myHashTable.hashMethod('Javier')

  test('should build correctly the table hashes', () => {
    expect(address1).toBe(10)
    expect(address2).toBe(10)
    expect(address3).toBe(22)
  })

  test('should add the items to the correct address', () => {
    expect(myHashTable.showData()[address3]).toEqual([['Javier', 2000]])
  })

  test('address 1 and address 2 must collide', () => {
    expect(address1).toBe(address2)
  })

  test('should push items to same address when the hash address collide', () => {
    expect(myHashTable.showData()[address1]).toEqual([['Diego', 1990], ['Mariana', 2000]])
    expect(myHashTable.showData()[address2]).toEqual([['Diego', 1990], ['Mariana', 2000]])
  })
})

describe('should get items using the get method on the class', () => {
  const myHashTable = new HashTable(50)
  myHashTable.set('Mariana', 2000)
  myHashTable.set('Javier', 1990)

  test('should get individual values by key', () => {
    expect(myHashTable.get('Mariana')).toEqual(2000)
    expect(myHashTable.get('Javier')).toEqual(1990)
  })

  test('should get all the keys on the hash table', () => {
    expect(myHashTable.get('Mariana')).toEqual(2000)
    expect(myHashTable.get('Javier')).toEqual(1990)
  })

  test('should get all the keys on the buckets', () => {
    expect(myHashTable.getAllKeys()).toEqual(['Mariana', 'Javier'])
  })
})

test('should delete items on an specific bucket address', () => {
  const myHashTable = new HashTable(50)
  myHashTable.set('Mariana', 2000)
  myHashTable.set('Javier', 1990)
  expect(myHashTable.delete('Mariana')).toEqual(['Mariana', 2000])
  expect(myHashTable.getAllKeys()).toEqual(['Javier'])
})
