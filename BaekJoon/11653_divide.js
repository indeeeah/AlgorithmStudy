/**
 * 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
 * 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.
 * N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
 * 예제 입력 1 - 72
 * 예제 출력 1 -
 * 2
 * 2
 * 2
 * 3
 * 3
 * 예제 입력 2 - 3
 * 예제 출력 2 - 3
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input !== 1) {
        while (input > 1) {
            for (let i = 2 ; i <= input ; i++) {
                if (input % i === 0) {
                    input = input / i;
                    console.log(i);
                    break;
                }
            }
        }
    }
    process.exit;
});