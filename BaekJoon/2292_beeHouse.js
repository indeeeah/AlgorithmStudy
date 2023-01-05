/**
 * 위의 그림과 같이 육각형으로 이루어진 벌집이 있다.
 * 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
 * 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오.
 * 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.
 * 첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.
 * 입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.
 * 
 * 예제 입력 1 - 13
 * 예제 출력 1 - 3
 * 
 * 방의 범위는 1 - 2~7(6) - 8~19(12) - 20~37(18)으로 범위가 넓어지고 있다.
 * 범위가 6의 배수로 커지므로 아래와 같이 작성하였다.
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let a = parseInt(input / 6);    // 6으로 나눠준다.
    let n = 0;  // 조건문을 주기위한 변수이다.
    let count = 1;  // 방 1번도 1개의 방을 지나가므로 1부터 카운트 해준다.
    let num = 1;    // 6 * num씩 범위가 늘어난다.

    while (a > n) {
        count++;
        n += num;
        num++;
    }

    count = n * 6 + 1 >= input ? count : ++count;
    console.log(count);
});