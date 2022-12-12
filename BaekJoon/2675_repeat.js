const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArr = [];
rl.on("line", (line) => {
    let arr = line.split(' ');

    if (arr.length > 1) {
        let repeatNum = arr[0];
        let str = arr[1];
        let resultStr = '';

        for (let i = 0 ; i < str.length ; i++) {
            resultStr += str[i].repeat(repeatNum);
            if (str[i] === '\\') {
                resultStr += str[i].repeat(repeatNum);
            }
        }

        resultArr.push(resultStr);
    }
}).on("close", () => {
    console.log(resultArr.join('\n'));

    process.exit;
});