const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let arr = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
    arr.push(parseInt(line));
}).on("close", () => {
    let sortArr = input.sort((a, b) => b - a);
    console.log(sortArr[0]);
    console.log(arr.indexOf(sortArr[0]) + 1);
    process.exit;
})