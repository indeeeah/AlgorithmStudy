const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    let length = input.split(' ').length;
    if (/^ /.test(input)) {
        length--;
    }
    if (input.charAt(input.length - 1) === ' ') {
        length--;
    }

    console.log(length);
});