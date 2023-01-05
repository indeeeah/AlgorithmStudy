/**
 * n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
 * 1부터 n까지 합을 출력한다.
 * 
 * 얘재 압력 1 - 3
 * 예제 츌력 1 - 6
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if (input >= 1 && input <= 10000) {
        let result = 0;
        for (let i = 1 ; i <= input ; i++) {
            result += i;
        }
        console.log(result);
    }
    process.exit;
});