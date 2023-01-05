// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
// 예제 입력 1 - 7 3
/* 예제 출력 1 -
    10
    4
    21
    2
    1
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", function () {
    if (input[0] >= 1 && input[1] <= 10000) {
        console.log(input[0] + input[1]);
        console.log(input[0] - input[1]);
        console.log(input[0] * input[1]);
        console.log(parseInt(input[0] / input[1]));
        console.log(input[0] % input[1]);
    }
    process.exit;
});