const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }
  static compareGPA(...students) {
    let highestGPA = students[0].GPA
    let bestStudent = `${students[0].firstName} ${students[0].lastName}`
    students.forEach(st => {
      if (st.GPA > highestGPA) {
        highestGPA = st.GPA
        bestStudent = `${st.firstName} ${st.lastName}`
      }
    })
    if (students.every(st => st.GPA === highestGPA)) {
      return 'Both students have the same GPA.'
    }
    return `${bestStudent} has the higher GPA.`
  }
}
// const henry = new Student('Henry', 'Woodmansee', 30, 'CS', 2.9)
// const steve = new Student('Steve', 'Fakeman', 40, 'History', 3.5)
// console.log(Student.compareGPA(henry, steve))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
