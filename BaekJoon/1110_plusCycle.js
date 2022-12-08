const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let count = 0;
    if (input >= 0 && input <= 99) {
        let result = -1;
        let a = input > 9 ? input.toString().substring(0, 1) : '0';
        let b = input > 9 ? input.toString().substring(1, 2) : input.toString();

        while (input !== result) {
            let sum = parseInt(a) + parseInt(b);
            let str = sum > 9 ? b + sum.toString().substring(1, 2) : b + sum.toString();
            a = b;
            b = sum > 9 ? sum.toString().substring(1, 2) : sum.toString();
            result = parseInt(str);
            count++;
        }
    }
    console.log(count);
    process.exit;
});