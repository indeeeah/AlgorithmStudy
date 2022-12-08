const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArr = [];
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1) {
        let sum = (arr.reduce((prev, cur) => prev + cur)) - arr[0];
        let average = sum / arr[0];
        let count = 0;

        for (let i = 1 ; i < arr.length ; i++) {
            arr[i] > average ? count++ : count + 0;
        }

        resultArr.push((count / arr[0] * 100).toFixed(3) + '%');
    }
}).on("close", () => {
    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    }
    process.exit;
});