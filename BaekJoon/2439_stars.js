const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input >= 1 && input <= 100) {
        for (let i = 1 ; i <= input ; i++) {
            console.log(" ".repeat(input - i) + "*".repeat(i));
        }
    }
    process.exit;
});