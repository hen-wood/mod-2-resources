const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    let sumsArray = []
    for (let i = increment; i <= 10 * increment; i += increment) {
        // console.time('addNums10Timing')
        const start = Date.now()
        sumsArray.push(addNums(i))
        // console.timeEnd('addNums10Timing')
        const end = Date.now()
        console.log(end - start)
    }

    return sumsArray
}
function addManyNums10Timing(increment) {
    let sumsArray = []

    for (let i = increment; i <= 10 * increment; i += increment) {
        // console.time('addManyNums10Timing')
        const start = Date.now()
        sumsArray.push(addManyNums(i))
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
