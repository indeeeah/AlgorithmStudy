const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line;
}).on("close", function () {
    if ((/^[a-z]+$/).test(input) && input.length <= 50) {
        console.log(input + "??!");
    }
    process.exit;
});