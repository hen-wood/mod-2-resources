// function errorThrown(message) {
//     console.log(message);
// }

// try {
//     const num = 10;
//     if (typeof num !== 'string') {
//         throw new Error('Need a string');
//     }
// } catch (e) {
//     errorThrown(e.message);
// }
// class NameError extends Error {
//     constructor(...params) {
//         super(...params);

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, NameError);
//         }

//         this.name = 'NameError';
//         this.message = 'There was a problem with the name';
//     }
// }

// try {
//     const name = 5;
//     if (typeof name !== 'string') {
//         throw new NameError('Name cannot be a string');
//     }
// } catch (e) {
//     console.log(e);
// }
// class NameError extends Error {
//     constructor(name = null, ...params) {
//         super(...params);

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, NameError);
//         }

//         this.name = 'NameError';
//         this.message = this.message || `There was a problem with the name '${name}'`;
//     }
// }

// try {
//     const name = 5;
//     if (typeof name !== 'string') {
//         throw new NameError('Name cannot be a string');
//     }
// } catch (e) {
//     console.log(e);
// }
// class NameError extends Error {
//     constructor(...params) {
//         super(...params);

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, NameError);
//         }

//         this.name = 'NameError';
//         this.message = this.message || 'There was a problem with the name';
//     }
// }

// try {
//     const name = 5;
//     if (typeof name !== 'string') {
//         throw new NameError('Name cannot be a string');
//     }
// } catch (e) {
//     console.log(e);
// }
// console.log('hello')
// class NameError extends Error {
//     constructor(name = null, ...params) {
//         super(...params);

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, NameError);
//         }

//         this.name = 'NameError';
//         this.message = this.message || `There was a problem with the name '${name}'`;
//     }
// }

// try {
//     const name = 5;
//     if (typeof name !== 'string') {
//         throw new NameError('Name cannot be a string');
//     }
// } catch (e) {
//     console.log(e);
// }

class Dog {
    constructor(name) {
        this.name = name;
        this.sound = 'woof';
    }

    speak() {
        return `${this.name} says '${this.sound}'`
    }
}

let fido = new Dog("Fido");
let fidoSpeak = fido.speak.bind(fido);



console.log(fidoSpeak()); // ERROR
