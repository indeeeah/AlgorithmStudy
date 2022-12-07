const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if(input >= 1 && input <= 4000) {
        if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
})