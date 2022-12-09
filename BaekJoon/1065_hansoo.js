const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    // 99까지의 한수는 99개이기 때문에 바로 출력해준다. 100부터는 각 자리를 비교해준다.
    if (input <= 99) {
        console.log(input);
    } else {
        let count = 99;
        for (let i = 100 ; i <= input ; i++) {
            let strNum = String(i);
            let repeatNum = parseInt(strNum[1]) - parseInt(strNum[0]);
            let repeatNumArr = [];
            let flag = false;

            for (let j = 1 ; j < strNum.length ; j++) {
                if (j + 1 === strNum.length) {
                    break;
                } else {
                    repeatNumArr.push(parseInt(strNum[j + 1]) - parseInt(strNum[j]));
                }
            }

            for (let j = 0 ; j < repeatNumArr.length ; j++) {
                if (repeatNumArr[j] !== repeatNum) {
                    flag = false;
                    break;
                }
                flag = true;
                continue;
            }

            if (flag === true) {
                count++;
            }
        }
        console.log(count);
    }
    process.exit;
});