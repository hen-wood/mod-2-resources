// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  // return n * (n / 2) + 1
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += addNums(i)
  }
  return total
}



module.exports = [addNums, addManyNums];
