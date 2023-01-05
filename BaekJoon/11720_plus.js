/**
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
 * 입력으로 주어진 숫자 N개의 합을 출력한다.
 * 
 * 예제 입력 1 -
 * 1
 * 1
 * 예제 출력 1 - 1
 * 예제 입력 2 - 
 * 5
 * 54321
 * 예제 출력 2 - 15
 * 예제 입력 3 -
 * 25
 * 7000000000000000000000000
 * 예제 출력 3 - 7
 * 예제 입력 4 -
 * 11
 * 10987654321
 * 예제 출력 4 - 46
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let result = 0;
    
    for (let i = 0 ; i < input[1].length ; i++) {
        result += parseInt(input[1][i]);
    }

    console.log(result);
    process.exit;
});