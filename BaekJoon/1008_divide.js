const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", function () {
    if (input[0] > 0 && input[1] < 10) {
        console.log((input[0] / input[1]));
    }
    process.exit;
});