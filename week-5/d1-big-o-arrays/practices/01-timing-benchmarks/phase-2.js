const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sumsArray = []
  for (let i = increment; i <= 10 * increment; i += increment) {
    sumsArray.push(addNums(i))
  }

  return sumsArray
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sumsArray = []

  for (let i = increment; i <= 10 * increment; i += increment) {
    sumsArray.push(addManyNums(i))
  }

  return sumsArray

}

module.exports = [addNums10, addManyNums10];
