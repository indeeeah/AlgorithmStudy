const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let a = parseInt(input / 6);
    let n = 0;
    let count = 1;
    let num = 1;

    while (a > n) {
        count++;
        n += num;
        num++;
    }

    count = n * 6 + 1 >= input ? count : ++count;
    console.log(count);
});