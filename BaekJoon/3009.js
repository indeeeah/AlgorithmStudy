/**
 * 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
 * 세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.
 * 직사각형의 네 번째 점의 좌표를 출력한다.
 * 
 * 예제 입력 1
 * 5 5
 * 5 7
 * 7 5
 * 예제 출력 1 - 7 7
 * 예제 입력 2
 * 30 20
 * 10 10
 * 10 20
 * 예제 출력 2 - 30 10
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let w = new Set();
let h = new Set();
rl.on('line', (line) => {
    let [input1 , input2] = line.split(' ');

    if (w.has(input1)) {
        w.delete(input1);
    } else {
        w.add(input1);
    }
    if (h.has(input2)) {
        h.delete(input2);
    } else {
        h.add(input2);
    }

}).on('close', () => {
    console.log(`${[...w]} ${[...h]}`);
    process.exit;
});
