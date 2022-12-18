const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resArr = [];
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1) {
        let height = 1;
        let weight = 1;
        let count = 1;

        while (arr[2] > count) {
            for (let i = 1 ; i < arr[0] ; i++) {
                if (arr[2] > count) {
                    height++;
                    count++;
                } else {
                    break;
                }
            }

            if (arr[2] > count) {
                count++;
                height = 1;
                weight++;
            }
        }

        height = height.toString();
        weight = weight.toString().length === 1 ? '0' + weight.toString() : weight.toString();

        resArr.push(height + weight);
    }
}).on("close", () => {
    console.log(resArr.join('\n'));
});