/**
 * 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
 * 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
 * 첫째 줄에 다음 세 가지 중 하나를 출력한다.
 * A가 B보다 큰 경우에는 '>'를 출력한다.
 * A가 B보다 작은 경우에는 '<'를 출력한다.
 * A와 B가 같은 경우에는 '=='를 출력한다.
 * -10,000 ≤ A, B ≤ 10,000
 * 
 * 예제 입력 1 - 1 2
 * 예제 출력 1 - <
 * 예제 입력 2 - 10 2
 * 예제 출력 2 - >
 * 예제 입력 3 - 5 5
 * 예제 출력 3 - ==
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[0] >= -10000 && input[0] <= 10000
        && input[1] >= -10000 && input[1] <= 10000) {
            if (input[0] > input[1]) {
                console.log(">");
            }
            if (input[0] < input[1]) {
                console.log("<");
            }
            if (input[0] === input[1]) {
                console.log("==");
            }
        }
    process.exit;
});