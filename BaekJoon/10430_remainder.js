const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[0] >= 2 && input[0] <= 10000
        && input[1] >= 2 && input[1] <= 10000
        && input[2] >= 2 && input[2] <= 10000) {
        console.log((input[0]+input[1])%input[2]);
        console.log(((input[0]%input[2]) + (input[1]%input[2]))%input[2]);
        console.log((input[0]*input[1])%input[2]);
        console.log(((input[0]%input[2]) * (input[1]%input[2]))%input[2]);
    }
    process.exit;
});