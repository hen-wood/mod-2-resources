function addNumsLinear(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}
function addNumsConstant(n) {
    const res = n * (n + 1) / 2
    return res
}
let t1 = performance.now()
addNumsLinear(10000000000)
let t2 = performance.now()
console.log(`Time Elapsed With Linear Function: ${Number((t2 - t1) / 1000).toFixed(2)} seconds`) // ~9.44 seconds --- O(n)

let t3 = performance.now()
addNumsConstant(10000000000)
let t4 = performance.now()
console.log(`Time Elapsed With Constant Function: ${Number((t4 - t3) / 1000).toFixed(2)} seconds`) // ~0.00 seconds --- O(1)
