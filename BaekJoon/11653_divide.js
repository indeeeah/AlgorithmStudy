const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input !== 1) {
        while (input > 1) {
            for (let i = 2 ; i <= input ; i++) {
                if (input % i === 0) {
                    input = input / i;
                    console.log(i);
                    break;
                }
            }
        }
    }
    process.exit;
});