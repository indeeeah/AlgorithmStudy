const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ');
}).on("close", () => {
    let a = BigInt(input[0]);
    let b = BigInt(input[1]);
    console.log((a + b).toString());
});