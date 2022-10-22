function isFive(num) {
  // Your code here
  return num === 5
}

function isOdd(number) {
  // Your code here
  if (typeof number === 'number') {
    return number % 2 !== 0
  } else {
    throw Error()
  }
}

function myRange(min, max, step = 1) {
  // Your code here
  const arr = []
  for (let i = min; i <= max; i += step) {
    arr.push(i)
  }
  return arr
}



module.exports = { isFive, isOdd, myRange };
