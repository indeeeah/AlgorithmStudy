const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resCount = 0;
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1) {
        for (let i = 0 ; i < arr.length ; i++) {
            let count = 0;

            for (let j = 1 ; j <= arr[i] ; j++) {
                if (arr[i] % j === 0) {
                    count++;
                }
            }

            if (count === 2) {
                resCount++;
            }
        }
    }
}).on("close", () => {
    console.log(resCount);
});