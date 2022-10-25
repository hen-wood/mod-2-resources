const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    let sumsArray = []
    console.time('addNums10Timing')
    for (let i = 1; i <= 10; i++) {
        const start = Date.now()
        sumsArray.push(addNums(increment * i))
        const end = Date.now()
        console.log(end - start)
    }
    console.timeEnd('addNums10Timing')

    return sumsArray
}
function addManyNums10Timing(increment) {
    let sumsArray = []

    for (let i = 1; i <= 10; i++) {
        // console.time('addManyNums10Timing')
        const start = Date.now()
        sumsArray.push(addManyNums(increment * i))
        // console.timeEnd('addManyNums10Timing')
        const end = Date.now()
        console.log(end - start)
    }

    return sumsArray

}

console.log(`addNums(10000000): `);

addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(5000): `);

addManyNums10Timing(5000);
