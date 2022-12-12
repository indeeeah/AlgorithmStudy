const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    input = input.replace(/c=/gi, 0);
    input = input.replace(/c-/gi, 0);
    input = input.replace(/dz=/gi, 0);
    input = input.replace(/d-/gi, 0);
    input = input.replace(/lj/gi, 0);
    input = input.replace(/nj/gi, 0);
    input = input.replace(/s=/gi, 0);
    input = input.replace(/z=/gi, 0);

    console.log(input.length);
    process.exit;
});