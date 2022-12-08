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
    let count = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] === input[2][0]) {
            count++;
        }
    }
    console.log(count);
    process.exit;
});