const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resArr = [];
rl.on("line", (line) => {
    let num = parseInt(line);

    if (num > 0) {
        let arr = new Set();

        for (let i = num ; i <= num * 2 ; i++) {
            arr.add(i);
        }

        arr.delete(1);
        arr.delete(num);

        let sqrt = Math.sqrt(num * 2);

        for (let i = 2 ; i <= sqrt ; i++) {
            for (let j = i + i ; j <= num * 2 ; j += i) {
                arr.delete(j);
            }
        }

        resArr.push(arr.size);
    }
}).on("close", () => {
    console.log(resArr.join('\n'));

    process.exit;
});