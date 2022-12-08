const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    for (let i = 1 ; i < 10 ; i++) {
        console.log(input + " * " + i + " = " + input * i);
    }
    process.exit;
})