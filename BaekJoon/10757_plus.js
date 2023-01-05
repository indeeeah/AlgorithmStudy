/**
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
 * 첫째 줄에 A+B를 출력한다.
 * 
 * 예제 입력 1 - 9223372036854775807 9223372036854775808
 * 예제 출력 1 - 18446744073709551615
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ');
}).on("close", () => {
    let a = BigInt(input[0]);
    let b = BigInt(input[1]);
    console.log((a + b).toString());
});