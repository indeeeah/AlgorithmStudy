const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultArrr = [];
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 0 && arr[0] > 0 && arr[1] < 10) {
        resultArrr.push(arr);
    }
}).on("close", () => {
    for (let i = 0 ; i < resultArrr.length ; i++) {
        console.log("Case #" + (i + 1) + ": " + resultArrr[i][0] + " + " + resultArrr[i][1] + " = " + (resultArrr[i][0] + resultArrr[i][1]));
    }
    process.exit;
});