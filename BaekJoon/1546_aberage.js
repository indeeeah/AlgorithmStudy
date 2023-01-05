/**
 * 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다.
 * 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다.
 * 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
 * 예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
 * 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.
 * 첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다.
 * 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
 * 첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.
 * 
 * 예제 입력 1 -
 * 3
 * 40 80 60
 * 예제 출력 1 - 75.0
 * 예제 입력 2 -
 * 3
 * 10 20 30
 * 예제 출력 2 - 66.666667
 * 예제 입력 3 -
 * 4
 * 1 100 100 100
 * 예제 출력 3 - 75.25
 * 예제 입력 4 -
 * 5
 * 1 2 4 8 16
 * 예제 출력 4 - 38.75
 * 예제 입력 5 -
 * 2
 * 3 10
 * 예제 출력 5 - 65.0
 * 예제 입력 6 -
 * 4
 * 10 20 0 100
 * 예제 출력 6 - 32.5
 * 예제 입력 7 -
 * 1
 * 50
 * 예제 출력 7 - 100.0
 * 예제 입력 8 -
 * 9
 * 10 20 30 40 50 60 70 80 90
 * 예제 출력 8 - 55.55555555555556
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let scores = input[1];
    scores.sort((a, b) => b - a);

    let maxScore = scores[0];
    let resultArr = [];

    for (let i = 0 ; i < scores.length ; i++) {
        resultArr.push(scores[i] / maxScore * 100);
    }
    let result = resultArr.reduce((prev, cur) => prev + cur);

    console.log(result / input[0][0]);

    process.exit;
});