/**
 * 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.
 * 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.
 * 달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.
 * 첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)
 * 첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
 * 
 * 예제 입력 1 - 2 1 5
 * 예제 출력 1 - 4
 * 예제 입력 2 - 5 1 6
 * 예제 출력 2 - 2
 * 예제 입력 3 - 100 99 1000000000
 * 예제 출력 3 - 999999901
 */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on("close", () => {
    if (input[0] === input[2]) {
        console.log(1);
    } else {
        console.log(Math.ceil((input[2] - input[0]) / (input[0] - input[1]) + 1));
    }
});