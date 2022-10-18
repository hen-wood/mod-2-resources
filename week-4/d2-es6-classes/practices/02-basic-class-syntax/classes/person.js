class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    return this
  }
  static introducePeople(arrOfPpl) {
    if (!Array.isArray(arrOfPpl)) {
      console.log('introducePeople only takes an array as an argument.')
      return
    } else if (!arrOfPpl.every(el => el instanceof Person)) {
      console.log('All items in array must be Person class instances.')
      return
    }
    arrOfPpl.forEach(el => el.introduce())
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
