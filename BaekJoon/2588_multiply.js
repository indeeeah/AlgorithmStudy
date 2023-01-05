/**
 * (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
 *    472 - (1)
 *  X 385 - (2)
 * --------
 *   2360 - (3)
 *  3776 - (4)
 * 1416 - (5)
 * --------
 * 181720 - (6)
 * (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
 * 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
 * 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
 * 
 * 예제 입력 1 -
 * 472
 * 385
 * 예제 입력 2 -
 * 2360
 * 3776
 * 1416
 * 181720
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    if(input[0] >= 100 && input[0] <= 999
        && input[1] >= 100 && input[1] <= 999) {
            let num = input[1];
            num = num.toString().split('');
            console.log(input[0] * parseInt(num[2]));
            console.log(input[0] * parseInt(num[1]));
            console.log(input[0] * parseInt(num[0]));
            console.log(input[0] * input[1]);
        }
    process.exit;
});