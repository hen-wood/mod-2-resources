function first(n) {
    if (n < 0) return;
    first(n - 1);
}

function second(n) {
    arr = [];
    for (let i = 0; i <= n; i++) {
        arr.unshift(i);
    }
    arr.join('\n');
}
console.time('first')
first(10000)
console.timeEnd('first')

console.time('second')
second(10000)
console.timeEnd('second')
