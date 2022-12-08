const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let arr = input[1];
    let x = input[0][1];
    let resultArr = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] < x) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));

    process.exit;
});