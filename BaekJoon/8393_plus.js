const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input >= 1 && input <= 10000) {
        let result = 0;
        for (let i = 1 ; i <= input ; i++) {
            result += i;
        }
        console.log(result);
    }
    process.exit;
});