// function multiplication(num1, num2) {
//     return num1 * num2;
// }

// module.exports = { multiplication };
// function hello() {
//     console.log(`Hello ${this.firstName}`);
// }

// const greeting = new hello(); // undefined

// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }

//     printName() {
//         console.log(this.firstName);
//     }
// }

// const brian = new Person('Brian');
// brian.printName(); // ?
// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
// }

// function printName() {
//     console.log(this.firstName)
// }

// const adrian = new Person('Adrian');

// printName(); // ?

// class Cat {
//     purr() {
//         console.log("meow");
//     }

//     purrMore() {
//         this.purr();
//     }
// }
// let cat = new Cat();

// let sayMeow = cat.purrMore;
// sayMeow(); // TypeError: this.purr is not a function

// // You can now use the built in Function.bind to ensure your context, `this`,
// // is the cat object
// let boundCat = sayMeow.bind(cat);

// // You still *need* to invoke the function
// boundCat(); // prints "meow"
// function hello() {
//     return `Hello ${this.firstName}`;
// }

// const derek = {
//     firstName: 'Derek'
// };

// console.log(hello.bind(derek));
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
// function hello() {
//     return `Hello ${this.firstName}`;
// }

// const derek = {
//     firstName: 'Derek'
// };

// const helloDerek = hello.bind(derek);
// console.log(helloDerek());
// function hello() {
//     return `Hello ${this.firstName}`;
// }

// const derek = {
//     firstName: 'Derek'
// };

// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }

//     eat = () => {
//         console.log(`${this.name} has a bite mark`);
//     }
// }

// const apple = new Fruit('apple');
// const eat = apple.eat;
// setTimeout(eat, 1000);
// const sum = (...nums) => {
//     return nums.reduce((acc, num) => {
//         acc + num
//     });
// }

// console.log(sum(1, 2, 3));
// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }

//     eat = () => {
//         console.log(`${this.name} has a bite mark`);
//     }
// }

// const apple = new Fruit('apple');
// const eat = apple.eat;
// eat();
// const sum = (...nums) => {
//     nums.reduce((acc, num) => acc + num);
// }

// console.log(sum(1, 2, 3));
// function greeting(...messages) {
//     return messages.map(message => {
//         return `${this.firstName} says ${message}`;
//     });
// }

// const derek = {
//     firstName: 'Derek'
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));
const sum = (...nums) => {
    return nums.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3));
