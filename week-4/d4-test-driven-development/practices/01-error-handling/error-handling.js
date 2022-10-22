// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
  let res = sum(null);
  console.log(res);
} catch (e) {
  console.log(e.message)
}

// 2.
// tests
function sayName(name) {
  if (typeof name !== 'string') {
    throw TypeError('Custom TypeError Message');
  } else {
    console.log(name)
  }
}
try {
  sayName('Alex')
  sayName(1);
} catch (e) {
  if (e instanceof TypeError) {
    console.log(e.name + ':', e.message)
  }
}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (e) {
  console.log('Whatever I want')
}
