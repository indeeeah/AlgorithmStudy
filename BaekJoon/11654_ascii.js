const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    console.log(input.charCodeAt(0));
    process.exit;
});