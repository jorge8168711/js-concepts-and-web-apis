const initialValues = [['other', 'value'], ['other2', 'value2']]
const map = new Map(initialValues)

map.set('name', 'Jorge')
map.set('age', 30)
map.set('delete', true)

console.log(map)
console.log(map.has('name'))// true
console.log(map.get('name')) // Jorge

// delete items
map.delete('delete')

map.forEach((value, key, originMap) => {
  console.log(value, key, originMap)
})

for (const [key, value] of map) {
  console.log([key, value])
}

// clear map
map.clear()

// other ways to iterate
// https://bobbyhadz.com/blog/javascript-iterate-map
