const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    let resArr = []
    for (let i = input[0] ; i <= input[1] ; i++) {
        let count = 0;
        
        for (let j = 1 ; j <= i ; j++) {
            if (i % j === 0) {
                count++;
            }

            if (count > 2) {
                break;
            }
        }

        if (count === 2) {
            resArr.push(i);
        }
    }

    console.log(resArr.join('\n'));
    process.exit;
});