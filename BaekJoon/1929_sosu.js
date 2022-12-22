const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    let resArr = new Set();

    for (let i = input[0] ; i <= input[1] ; i++) {
        resArr.add(i);
    }

    resArr.delete(1)

    let sqrt = Math.sqrt(input[1]);

    for (let i = 2 ; i <= sqrt ; i++) {
        for (let j = i + i ; j <= input[1] ; j += i) {
            resArr.delete(j);
        }
    }

    let result = [];

    for (let i of resArr.values()) {
        result.push(i)
    }

    console.log(result.join('\n'));

    process.exit;
});