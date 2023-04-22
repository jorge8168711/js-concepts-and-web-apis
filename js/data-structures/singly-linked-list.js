'use strict'
/*
  linked list

  head              Tail
  ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ 3 ├─►10 ├─► 1 ├─► 7 ├───►null
  └───┘ └───┘ └───┘ └───┘

  Linked List son simplemente un conjunto de nodos ordenados que contienen los valores
  que necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia
  a un siguiente nodo.

  Métodos
    Prepend ⇒ Agregar un nodo al inicio
    Append ⇒ Agregar un nodo al final
    Lookup / Search ⇒ Buscar un nodo
    Insert ⇒ insertar un nodo en la lista
    Delete ⇒ Borrar un nodo

    Singly Linked List
    Tenemos un nodo, Se compone de dos factores
      - Valor
      - Valor del Next

   ┌────┐  ┌────┐  ┌────┐  ┌────┐
   │    │  │    │  │    │  │    │
   │ 3  │  │ 10 │  │ 1  │  │ 7  │
   └─┬──┘  └▲──┬┘  └▲──┬┘  └▲─┬─┘
     │      │  │    │  │    │ │
    next────┘next───┘next───┘next──────► null
*/

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }

  prepend (value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }

  insert (index, value) {
    if (!value) return

    if (index >= this.length) {
      return this.append(value)
    }

    // the newNode is created
    const firstPointer = this.lookup(index - 1)
    if (firstPointer) {
      const newNode = new Node(value)
      const holdingPointer = firstPointer.next
      // then we set the newNode on the firstPointer.next
      firstPointer.next = newNode
      // we backup the next value from the found node
      // on the newNode
      newNode.next = holdingPointer

      // this means that the new node was inserted at the tail
      // then we need to set the tail with the new node
      if (newNode.next === null) {
        this.tail = newNode
      }

      this.length += 1
      return this
    }
  }

  lookup (index) {
    let currentNode = this.head
    let counter = 0;
    if (index < 0 || index >= this.length) return null;
    
    while(counter !== index) {
      counter += 1
      currentNode = currentNode.next
    }
    
    return currentNode
  }
  
  delete(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length -= 1
      return this
    }
    
    const firstNode = this.lookup(index - 1)
    const secondNode = this.lookup(index)
    firstNode.next = secondNode.next
    this.length -= 1
    return this
  }
}

const slList = new SinglyLinkedList(1)
slList.append(2)
slList.append(3)
slList.append(8)

slList.delete(3)

