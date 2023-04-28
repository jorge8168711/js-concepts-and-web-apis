'use strict'
/*
  Binary Search Tree is a node-based binary tree data structure which has the following properties:
  - The left subtree of a node contains only nodes with keys lesser than the node’s key.
  - The right subtree of a node contains only nodes with keys greater than the node’s key.
  - The left and right subtree each must also be a binary search tree.

         10
      4     20
    2  8  17  170
*/
const LEFT = 'left'
const RIGHT = 'right'

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    } else {
      let currentNode = this.root
      let direction = ''

      while (true) {
        // we get the direction we are going to move to
        direction = value > currentNode.value ? RIGHT : LEFT

        // validate if the node on the direction is empty
        if (!currentNode[direction]) {
          currentNode[direction] = newNode
          return this
        }

        // update the current node to continue the tree traversing
        currentNode = currentNode[direction]
      }
    }

    return this
  }

  // https://en.wikipedia.org/wiki/Depth-first_search
  depthFirst (node = this.root) {
    if (node) {
      const str = `[ ${node.left?.value || '-'}, ${node.right?.value || '-'} ]`
      console.log(node.value, str)
      this.depthFirst(node.left)
      this.depthFirst(node.right)
    }
  }

  search (value) {
    let currentNode = this.root
    let direction = ''

    while (true) {
      if (!value || !currentNode) return null
      if (currentNode.value === value) return currentNode

      direction = value > currentNode?.value ? RIGHT : LEFT
      currentNode = currentNode[direction]
    }
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(4)
bst.insert(20)
bst.insert(2)
bst.insert(8)
bst.insert(17)
bst.insert(170)
bst.insert(17)
bst.insert(170)
console.log(bst.search(20))
