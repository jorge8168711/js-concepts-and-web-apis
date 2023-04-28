/*
  Graph example

   2 - 0
  / \
 1 - 3

 the followings are the different ways to represent the graph above
*/

// EDGE LIST
// this a list of arrays with the edges on the graph
const grapha = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
]

// ADJACENT LIST
// each index on the graph has an array with the adjacent nodes
//               0      1        2        3
const graphb = [[2], [2, 3], [0, 1, 3], [1, 2]]

// with a hash table
// each index on the graph has a key with an array with the adjacent nodes
const graphc = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
}

// ADJACENT MATRIX
// an adjacent matrix is a table with the nodes on the graph as columns and rows
const graphd = [
// 0  1  2  3   index position
  [0, 0, 1, 0], // index: 0 / has a connection with index 2
  [0, 0, 1, 1], // index: 1 / has connection with index 2 and 3
  [1, 1, 0, 1], // index: 2 / has a connection with index 0, 1 and 3
  [0, 1, 1, 0] // index: 3 / has connection with index 1 and 2
]

const graphe = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}
