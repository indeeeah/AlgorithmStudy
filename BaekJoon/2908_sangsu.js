const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ');
}).on("close", () => {
    let arr = [];

    for (let i = 0 ; i < input.length ; i++) {
        let strNum = '';
        for (let j = input[i].length - 1; j >= 0 ; j--) {
            strNum += input[i][j];
        }

        arr.push(parseInt(strNum));
    }

    arr.sort((a, b) => b - a);

    console.log(arr[0]);

    process.exit;
});