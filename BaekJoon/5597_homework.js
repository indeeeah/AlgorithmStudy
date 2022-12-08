const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    input.sort((a, b) => a - b);
    for (let i = 1 ; i <= 30 ; i++) {
        let index = input.indexOf(i);

        if (index === -1) {
            result.push(i);
        }
    }
    console.log(result[0] + '\n' + result[1]);
    process.exit;
});