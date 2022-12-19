const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let count = 0;
    while (true) {
        if (input % 5 === 0) {
            console.log(input / 5 + count);
            break;
        }

        if (input < 0) {
            console.log(-1);
            break;
        }

        if (input === 0) {
            console.log(count);
            break;
        }

        count++;
        input -= 3;
    }
});