const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience
  }
  static combinedYearsOfExperience(teachers) {
    let years = teachers.map(el => el.yearsOfExperience)
    return years.reduce((a, b) => a + b)
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
