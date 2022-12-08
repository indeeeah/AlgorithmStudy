const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let scores = input[1];
    scores.sort((a, b) => b - a);

    let maxScore = scores[0];
    let resultArr = [];

    for (let i = 0 ; i < scores.length ; i++) {
        resultArr.push(scores[i] / maxScore * 100);
    }
    let result = resultArr.reduce((prev, cur) => prev + cur);

    console.log(result / input[0][0]);

    process.exit;
});