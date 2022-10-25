
function analyzeTime(increment, cb) {
    console.log(`Time analysis for: ${cb}`)
    let sumsArray = []
    console.time('Total time:')
    for (let i = 1; i <= 15; i++) {
        const start = Date.now()
        sumsArray.push(cb(increment * i))
        const end = Date.now()
        console.log(end - start)
    }
    console.timeEnd('Total time:')
}
