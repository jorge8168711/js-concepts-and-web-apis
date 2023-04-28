class Node {
  constructor (value) {
    this.value = value
    this.adjacent = []
  }
}

class Graph {
  constructor () {
    this.nodes = 0
    this.adjacentList = {}
  }

  // add a node/vertex to the graph
  addVertex (node) {
    this.adjacentList[node] = []
    this.nodes++
  }

  addEdge (node1, node2) {
    if (this.adjacentList[node1] && !this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2)
    }

    if (this.adjacentList[node2] && !this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1)
    }
  }

  getEdgeList () {
    const result = []
    const graphKeys = Object.keys(this.adjacentList)
    // iterate over the vertex items
    for (let i = 0; i < graphKeys.length; i += 1) {
      const nodeKey = graphKeys[i]
      // iterate over the edges of each vertext
      for (let z = 0; z < this.adjacentList[nodeKey].length; z += 1) {
        const edge = this.adjacentList[nodeKey][z]

        if (!result.some(item => item.includes(+nodeKey) && item.includes(edge))) {
          result.push([+nodeKey, edge])
        }
      }
    }

    return result
  }
}

const g = new Graph()
g.addVertex(1)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)
g.addVertex(8)

g.addEdge(8, 4)
g.addEdge(4, 1)
g.addEdge(4, 5)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(1, 6)
g.addEdge(3, 1)
g.addEdge(3, 6)
g.addEdge(3, 5)
g.addEdge(5, 4)
g.addEdge(5, 3)
g.addEdge(6, 1)
g.addEdge(6, 3)
g.getEdgeList()
