let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArr = [];
rl.on("line", (line) => {
    let arr = line.split('X');
    let sumArr = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if ((/^O/).test(arr[i])) {
            let len = arr[i].length;
            let sum = 0;
            
            for (let j = 1 ; j <= len ; j++) {
                sum += j;
            }
            sumArr.push(sum);
        }
        if (arr[i] === '') {
            sumArr.push(0);
        }
    }

    if (sumArr.length > 0) {
        resultArr.push(sumArr.reduce((prev, cur) => prev + cur));
    }
}).on("close", () => {
    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    }
    process.exit;
});