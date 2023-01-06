/**
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
 * 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
 * 
 * 예제 입력 1 -
 * 5
 * 5
 * 2
 * 3
 * 4
 * 1
 * 
 * 예제 출력 1 -
 * 1
 * 2
 * 3
 * 4
 * 5
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = false;
let arr = [];
rl.on("line", (line) => {
    let input = parseInt(line);

    if (flag === false) {
        flag = true;
    } else {
        arr.push(input);
    }
}).on("close", () => {
    arr.sort((a, b) => a - b);

    console.log(arr.join('\n'));

    process.exit;
});