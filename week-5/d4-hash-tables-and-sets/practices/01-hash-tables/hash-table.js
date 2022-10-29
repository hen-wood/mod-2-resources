const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    if (!this.data[this.hashMod(key)]) {
      this.count++
      this.data[this.hashMod(key)] = new KeyValuePair(key, value)
    } else {
      throw new Error('hash collision or same key/value pair already exists!')
    }
  }

  insertWithHashCollisions(key, value) {
    this.count++
    const element = new KeyValuePair(key, value)
    if (this.data[this.hashMod(key)]) {
      const curr = this.data[this.hashMod(key)]
      element.next = curr
      this.data[this.hashMod(key)] = element
    } else {
      this.data[this.hashMod(key)] = element
    }
  }

  insert(key, value) {
    let index = this.hashMod(key)
    let element = this.data[index]
    while (element && element.key !== key) {
      element = element.next
    }
    if (element) {
      element.value = value
      return
    }
    this.insertWithHashCollisions(key, value)
  }
}

module.exports = HashTable;
