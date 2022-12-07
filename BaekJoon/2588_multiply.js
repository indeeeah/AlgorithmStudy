const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    if(input[0] >= 100 && input[0] <= 999
        && input[1] >= 100 && input[1] <= 999) {
            let num = input[1];
            num = num.toString().split('');
            console.log(input[0] * parseInt(num[2]));
            console.log(input[0] * parseInt(num[1]));
            console.log(input[0] * parseInt(num[0]));
            console.log(input[0] * input[1]);
        }
    process.exit;
});