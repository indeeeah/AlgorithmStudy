const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    for (let i = 1 ; i <= input[0] ; i++) {
        console.log(input[i][0] + input[i][1]);
    }
    process.exit;
})