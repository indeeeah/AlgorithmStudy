/**
 * (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
 * (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
 * 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
 * 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)
 * 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
 * 
 * 예제 입력 1 - 5 8 4
 * 예제 출력 1 - 
 * 1
 * 1
 * 0
 * 0
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[0] >= 2 && input[0] <= 10000
        && input[1] >= 2 && input[1] <= 10000
        && input[2] >= 2 && input[2] <= 10000) {
        console.log((input[0]+input[1])%input[2]);
        console.log(((input[0]%input[2]) + (input[1]%input[2]))%input[2]);
        console.log((input[0]*input[1])%input[2]);
        console.log(((input[0]%input[2]) * (input[1]%input[2]))%input[2]);
    }
    process.exit;
});