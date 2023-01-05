/**
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
 * 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
 * 
 * 예제 입력 1 - 3 16
 * 예제 출력 1 -
 * 3
 * 5
 * 7
 * 11
 * 13
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    let resArr = new Set();

    for (let i = input[0] ; i <= input[1] ; i++) {
        resArr.add(i);
    }

    resArr.delete(1)

    let sqrt = Math.sqrt(input[1]);

    for (let i = 2 ; i <= sqrt ; i++) {
        for (let j = i + i ; j <= input[1] ; j += i) {
            resArr.delete(j);
        }
    }

    let result = [];

    for (let i of resArr.values()) {
        result.push(i)
    }

    console.log(result.join('\n'));

    process.exit;
});