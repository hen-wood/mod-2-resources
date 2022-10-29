const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/
const singleTest = new LinkedList()
const doubleTest = new DoublyLinkedList()

for (let i = 0; i < 50; i++) {
    const start = Date.now()
    for (let j = 0; j < 200000; j++) {
        doubleTest.addToTail('value')
    }
    const end = Date.now()
    console.log(end - start)
}

// // Your code here
// doubleTest.addToHead('baxter')
// doubleTest.addToHead('henry')
// doubleTest.addToHead('larissa')
// doubleTest.addToTail('larissa')
// doubleTest.addToTail('larissa')
// doubleTest.addToTail('larissa')
// doubleTest.addToTail('larissa')
