/*
Single Responsibility Principle: Do one thing and do it well

SRP refers to the idea that a function or class or method should be responsible
for just as much functionality as is necessary...no more, no less.

An example is given in your reading using a JavaScript class (that you will
learn about tomorrow). The class Book should only contain the properties and
methods that pertain to descriptions and behaviors of a book.

The second class SimplePrinter that was created later holds the
descriptors(properties) and the behaviors related to printing some type of
object.

Following the guidelines of SRP sets up easier to read code that just makes more
sense.


*/


/*
DRY - Don't Repeat Yourself:

Making code that is more readable and more reusable should be every programmer's
goal. By taking a critical look at your code and identifying places where you
may have identical logic repeated throughout and creating smaller, more reusable
functions or methods to contain that logic, allows you to write code that other
programmers will be able to follow more closely and accurately, leading to
maintainable code.



The opposite of DRY coding is, of course, WET. We Enjoy Typing.
*/



/**************** Homework ********
 Each module in Node has access to a module obejct that reps the current module

 The module.exports property is used to export items from the module

*/

/*
        How to export items from your module



      Option A: Assigning an object to the module.exports property

      Note: if item is exported in an object, it must be destructured when importing

        module.exports = {
            someFunction,
            anotherFunction,
            yetAnotherFunction
        }

       This is shorthand for:

         module.exports = {
             someFunction: someFunction,
             anotherFunction: anotherFunction,
             yetAnotherFunction: yetAnotherFuntion
         }



       Option B: The exports shortcut

module.exports.add = add; // Names don't need to match but it's best practice
module.exports.subtract = add


        Option C: The exports shortcut
exports.multiply = multiply


Exporting a single item from a module:

module.exports = whateverYouWantToExport

Importing using require

When a module needs something from another module it is "dependent" on that module
Another way to think of a dependency is as a "requirement"

The built in require funtion allows you to import items from a module

E.G. -- a file structure like this:

./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── students.js
    └── teachers.js

To import the students.js module into the physics.js module, you would write this:

const students = require('../people/students')

Note: the ".js" is not necessary to add


Add multiple items from modules individually:

const calulator = require('./calculator')
const add = calulator.add
const subtract = calulator.subtract
const operations = calculator.operations


Add multiple items from a module using destructuring:

const { add, subtract, operations } = require('./calculator')



Importing an item from a module with only one export, just assign the invoked require function
to a variable:

**Example export**
module.exports = example


**Example Import**
const example = require('./example-module')


You need to know what is being exported from a module whether importing multiple or single items
You also need to know the relative path

You can load a folder (not just a file) as a module in Node.js
The folder MUST have a file called index.js and node will be prompted
to look for it (and only it) when importing the folder

example:

./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── index.js
    ├── students.js
    └── teachers.js

loading the index.js file as a module from the physics.js file can be written:
const people = require('../people')

or:

const people = require('../people/index.js')
*/
class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    greet() {
        console.log(`${this.firstName} says hello!`);
    }
}

const kristen = new Person('Kristen');
Person()
