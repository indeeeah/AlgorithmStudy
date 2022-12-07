const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line)=> {
    input = line.split(' ').map((element)=> parseInt(element));
}).on("close", () => {
    let king = 1;
    let queen = 1;
    let look = 2;
    let beshop = 2;
    let knight = 2;
    let phone = 8;
    let result = [];

    if ((input[0] >= 0 && input[0] <= 10)
        && (input[1] >= 0 && input[1] <= 10)
        && (input[2] >= 0 && input[2] <= 10)
        && (input[3] >= 0 && input[3] <= 10)
        && (input[4] >= 0 && input[4] <= 10)
        && (input[5] >= 0 && input[5] <= 10)) {
            result[0] = king - input[0];
            result[1] = queen - input[1];
            result[2] = look - input[2];
            result[3] = beshop - input[3];
            result[4] = knight - input[4];
            result[5] = phone - input[5];

            result = result.toString();
            result = result.replace(/,/gi, ' ');
            console.log(result);
    }
    process.exit;
});