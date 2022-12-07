const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[0] >= -10000 && input[0] <= 10000
        && input[1] >= -10000 && input[1] <= 10000) {
            if (input[0] > input[1]) {
                console.log(">");
            }
            if (input[0] < input[1]) {
                console.log("<");
            }
            if (input[0] === input[1]) {
                console.log("==");
            }
        }
    process.exit;
});