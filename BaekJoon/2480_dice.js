const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    let a = input[0];
    let b = input[1];
    let c = input[2];

    if (a === b && a === c) {
        console.log(10000 + a * 1000);
    } else if (a === b || a === c) {
        console.log(1000 + a * 100);
    } else if (b === c) {
        console.log(1000 + b * 100);
    } else {
        let max = Math.max(a, b);
        max = Math.max(max, c);
        console.log(max * 100);
    }
})