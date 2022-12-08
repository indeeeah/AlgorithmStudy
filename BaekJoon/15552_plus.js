const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArr = [];
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1) {
        let result = arr.reduce((prev, cur) => prev + cur);
        resultArr.push(result);
    }
}).on("close", () => {
    console.log(resultArr.join('\n'));
    process.exit;
})