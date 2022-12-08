const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let resultArr = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    input.forEach((element) => {
        let remainder = element % 42;
        let index = resultArr.indexOf(remainder);
        if (index === -1) {
            resultArr.push(remainder);
        }
    });

    console.log(resultArr.length);
});