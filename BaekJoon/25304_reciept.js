const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let x = input[0];
    let n = input[1];
    let result = 0;
    if (x >= 1 && x <= 1000000000 && n >= 1 && n <= 100) {
        for (let i = 2 ; i < n[0] + 2 ; i++) {
            if (input[i][0] >= 1 && input[i][0] <= 1000000 && input[i][1] >= 1 && input[i][1] <= 10) {
                result += (input[i][0] * input[i][1]);
            }
        }
    }
    console.log(x[0] === result ? "Yes" : "No");
    process.exit;
});