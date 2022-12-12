const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    let arr = [];
    let countArr = [];
    for (let i = 0 ; i < input.length ; i++) {
        let index = arr.findIndex((element) => {
            return element.word === input[i].toUpperCase();
        });

        if (index > -1) {
            arr[index].count++;
        } else {
            arr.push({
                word: input[i].toUpperCase(),
                count: 1
            });
        }
    }

    for (let i = 0 ; i < arr.length ; i++) {
        countArr.push(arr[i].count);
    }

    countArr.sort((a, b) => b - a);

    let maxCount = countArr[0];
    let maxWord = arr.filter((element) => {
        return element.count === maxCount;
    });

    if (maxWord.length > 1) {
        console.log('?');
    } else {
        console.log(maxWord[0].word);
    }

    process.exit;
});