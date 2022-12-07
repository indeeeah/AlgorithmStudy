const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    if (input[0] >= -1000 && input[0] <= 1000 && input[0] !== 0
        && input[1] >= -1000 && input[1] <= 1000 && input[1] !== 0) {
            if (input[0] > 0 && input[1] > 0) {
                console.log(1);
            }
            if (input[0] < 0 && input[1] > 0) {
                console.log(2);
            }
            if (input[0] < 0 && input[1] < 0) {
                console.log(3);
            }
            if (input[0] > 0 && input[1] < 0) {
                console.log(4);
            }
        }
    process.exit;
});