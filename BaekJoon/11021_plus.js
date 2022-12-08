const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArr = [];
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1 && arr[0] > 0 && arr[1] < 10) {
        let result = arr.reduce((prev, cur) => prev + cur);
        resultArr.push(result);
    }
}).on("close", () => {
    if (resultArr.length > 0) {
        for (let i = 0 ; i < resultArr.length ; i++) {
            console.log("Case #" + (i + 1) + ": " + resultArr[i]);
        }
    }
});