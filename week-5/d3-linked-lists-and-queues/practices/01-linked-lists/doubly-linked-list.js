class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) {
    this.print()
    this.length++
    const newHead = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.head = newHead
      this.tail = newHead
      return this.length
    }
    newHead.next = this.head
    this.head.prev = newHead
    this.head = newHead
    return this.length
  }
  addToTail(val) {
    this.print()
    this.length++
    const newTail = new DoublyLinkedListNode(val)
    if (!this.tail) {
      this.tail = newTail
      this.head = newTail
      return this.length
    }
    this.tail.next = newTail
    newTail.prev = this.tail
    this.tail = newTail
    return this.length
  }
  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;

    // addToHead(val) {
    //   this.length++
    //   const newHead = new DoublyLinkedListNode(val)
    //   if (!this.head) {
    //     this.head = newHead
    //     this.tail = newHead
    //   }
    //   newHead.next = this.head
    //   this.head.prev = newHead
    //   this.head = newHead
    // }

    // addToTail(val) {
    //   this.length++
    //   const newTail = new DoublyLinkedListNode(val)
    //   if (!this.tail) {
    //     this.tail = newTail
    //     this.head = newTail
    //   }
    //   newTail.prev = this.tail
    //   this.tail.next = newTail
    //   this.tail = newTail
    // }
