const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[2] - input[1] <= 0) {
        console.log(-1);
    } else {
        let result = Math.floor(input[0] / (input[2] - input[1])) + 1;
        console.log(result > 0 ? result : -1);
    }
    process.exit;
});