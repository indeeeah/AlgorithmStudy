const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    let sum = 0;
    let minNum = 0;

    for (let i = input[0] ; i <= input[1] ; i++) {
        let count = 0;
        for (let j = 1 ; j <= i ; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            sum += i;
            if (minNum === 0) {
                minNum = i;
            }
        }
    }

    if (sum === 0) {
        console.log(-1);
    } else {
        console.log(sum);
        console.log(minNum);
    }
});