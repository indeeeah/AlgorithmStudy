const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
rl.on("line", (line) => {
    if (isNaN(line)) {
        let word = '';
        let flag = true;
        for (let i = 0 ; i < line.length ; i++) {
            let index = word.indexOf(line[i]);
            if (index > -1 && word[word.length -1] !== line[i]) {
                flag = false;
                break;
            }
            word += line[i];
            flag = true;
        }

        if (flag === true) {
            count++;
        }
    }
}).on("close", () => {
    console.log(count);
});