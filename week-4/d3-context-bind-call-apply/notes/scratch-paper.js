// function greeting(...messages) {
//     const that = this;
//     return messages.map(function (message) {
//         return `${that.firstName} says ${message}`;
//     });
// }

// const derek = {
//     firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// eatFruits(['apple','orange'])

// console.log([['apple', 'orange', 'banana']].join(' and '))

// function eatFruits(...fruits) {
//     return `${this.firstName} ate ${fruits.join(' and ')}`;
// }

// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
// }

// const mylo = new Person('Mylo');
// console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana']));
// eat = () => {
//     console.log('hello')
// }
// console.log(eat)
// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }

//     arrow = () => {
//         return `Arrow function context: ${this}`
//     }
//     regular() {
//         return `Regluar function context: ${this}`
//     }
// }

// const apple = new Fruit('apple');
// const arrowFunc = apple.arrow;
// const regFunc = apple.regular;

// console.log(apple.arrow())
// console.log(apple.regular())
// const sum = (...nums) => {
//     return nums.reduce((acc, num) => acc + num);
// }
// console.log(sum(1, 2, 3))
// const sum = (...nums) => {
//     nums.reduce((acc, num) => acc + num);
// }

// console.log(sum(1, 2, 3));
class Fruit {
    constructor(name) {
        this.name = name;
    }

    eat = () => {
        console.log(`${this.name} has a bite mark`);
    }
}

const apple = new Fruit('apple');
const pear = new Fruit('pear')
const eat = apple.eat;
const eatPear = pear.eat.bind(pear)
eat()
eatPear()
