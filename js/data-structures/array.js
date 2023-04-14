class CustomArray {
  constructor () {
    this.length = 0
    this.data = {}
  }

  get (index) {
    return this.data[index]
  }

  push (item) {
    this.data[this.length] = item
    this.length += 1
    return this.data
  }

  pop (index) {
    const lasItem = this.data[this.length - 1]
    if (lasItem) {
      delete this.data[this.length - 1]
      this.length = this.length -= 1
      return lasItem
    }
  }

  delete (index) {
    const item = this.data[index]
    if (item) {
      this.reorderData(index)
      return item
    }
  }

  reorderData (index) {
    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length = this.length -= 1
  }

  shift () {
    const item = this.data[0]
    if (item) {
      for (let i = 0; i < this.length; i += 1) {
        this.data[i] = this.data[i + 1]
      }

      delete this.data[this.length - 1]
      this.length = this.length -= 1
    }

    return item
  }

  unshift (item) {
    if (!item) return this.length

    for (let i = this.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = item
    this.length = this.length += 1
    return this.length
  }
}

const arr = new CustomArray()
arr.push('jorge')
arr.push('manuel')
arr.push('luis')
arr.push('dan')
arr.shift()
arr

module.exports = CustomArray
