const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let result = 0;
    
    for (let i = 0 ; i < input[1].length ; i++) {
        result += parseInt(input[1][i]);
    }

    console.log(result);
    process.exit;
});12