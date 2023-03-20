// the sets are an ordered list without duplicated values
// allow a quick access to the contained data

// const items = new Set()
const items = new Set([1, 2, 3, 4, 5, 6])

// add items
items.add(1)
items.add(2)
items.add(3)
items.add('3')

// validate if an item exist
items.has(1)

// delete items
items.delete(1)
items.delete('3')

// clear the set
// items.clear()
console.log(items)

items.forEach((value, key, set) => {
  console.log(value, key, set)
})

for (const item of items) {
  console.log(item)
}

for (const item of items.values()) {
  console.log(item)
}

// different ways to iterate over a set
// https://bobbyhadz.com/blog/javascript-iterate-over-set-elements

// convert a set to an array
const arr = [...items]
console.log(arr)
