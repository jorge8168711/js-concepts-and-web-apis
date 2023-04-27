/*
  Hash Tables are a data structure that allow you to create
  a list of paired values. You can then retrieve a certain value by
  using the key for that value, which you put into the table beforehand.

  A Hash Table transforms a key into an integer index using a
  hash function, and the index will decide where to store the key/value pair in memory:
  Structure of a Hash Table
                                     Buckets
                           ───────────────────────────

                            Hash    Key          Value
                           ┌──────┬─────────────┬─────┐
                           │ 234  │  Other      │ 10  │
                           ├──────┼─────────────┼─────┤
 Key: Mandarinas           │ 235  │             │     │
 Value: 20                 ├──────┼─────────────┼─────┤
       │      ┌───────────►│ 236  │Mandarinas   │ 20  ├──────►  Bucket
       │      │            ├──────┼─────────────┼─────┤
┌──────▼──────┴─┐          │ 237  │             │     │
│               │          └──────┴─────────────┴─────┘
│   Hash        │
│   Function    │
└───────────────┘
  The hash function is the one that will generate the address for the key

  Example of the data in a hash table
  HashTable {
    data: [
      // bucket with 2 elements, when the key produces the same hash
      // the items are pushed to the same bucket
      [
        [ 'Diego', { name: 'Diego', id: 1 } ],
        [ 'Mariana', { name: 'Mariana', id: 2 } ]
      ],
      <1 empty item>,
      // bucket with 1 element
      [ [ 'Javier', { name: 'Javier', id: 3 } ] ],
      <7 empty items>
    ]
  }
*/

class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  hashMethod (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    const address = this.hashMethod(key) // this is a number
    // we validate if the address exist on the array
    // if doesn't exist we create an empty array in that address
    if (!this.data[address]) {
      this.data[address] = []
    }
    // in the address array we push a tuple with the key and the value
    // [key, value]
    this.data[address].push([key, value])
  }

  get (key) {
    const address = this.hashMethod(key)
    const bucket = this.data[address]

    if (bucket) {
      // we iterate over the items inside the bucker e.g.
      // [ [ 'Diego', 1990 ], [ 'Mariana', 2000 ] ]
      // to search the value for the incoming key
      // [ key, value ]
      for (let i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
    }

    return null
  }

  delete (key) {
    const address = this.hashMethod(key)
    const bucket = this.data[address]
    // bucket data sample
    // [ [ 'Diego', 1990 ], [ 'Mariana', 2000 ] ]
    if (bucket) {
      // we search the index position for the bucket item that contains the incoming key
      const keyIndex = bucket.findIndex(([buckeItemtKey]) => buckeItemtKey === key)
      // if te item was found we delete the item using the splice method
      if (keyIndex !== -1) {
        return this.data[address].splice(keyIndex, 1)[0]
      }
    }
  }

  getAllKeys () {
    const result = []
    const flattenedList = this.data.flat()
    // we flattened the lit urging the flat method of the arrays to get something like this:
    // [ [ 'Diego', 1990 ], [ 'Mariana', 2000 ], [ 'Javier', 2000 ] ]

    // then we iterate over the flattened list to get all the keys of each tuple
    for (let i = 0; i < flattenedList.length; i += 1) {
      result.push(flattenedList[i][0])
    }

    return result
  }

  showData () {
    return this.data
  }
}
const a = new HashTable(10)
module.exports = HashTable
