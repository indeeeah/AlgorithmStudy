const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    input[1].sort((a, b) => a - b);

    console.log(`${input[1][0]} ${input[1][input[0]-1]}`)
    process.exit;
});