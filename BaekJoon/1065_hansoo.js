/**
 * 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
 * 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
 * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
 * 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
 * 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
 * 
 * 예제 입력 1 - 110
 * 예제 출력 1 - 99
 * 예제 입력 2 - 1
 * 예제 출력 2 - 1
 * 예제 입력 3 - 210
 * 예제 출력 3 - 105
 * 예제 입력 4 - 1000
 * 예제 출력 4 - 144
 * 예제 입력 5 - 500
 * 예제 출력 5 - 119
 */

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