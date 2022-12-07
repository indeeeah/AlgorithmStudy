const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input >= 1000 && input <= 3000) {
        let year = 543;
        console.log(input - year);
    }
    process.exit;
});