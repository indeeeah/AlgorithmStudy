/**
 * 2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 N명의 학생들이 응시했다.
 * 이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.
 * 커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.
 * 첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.
 * 둘째 줄에는 각 학생의 점수 x가 공백을 사이에 두고 주어진다.
 * 상을 받는 커트라인을 출력하라.
 * 1 <= N <= 1000
 * 1 <= k <= N
 * 0 <= x <= 10000
 * 
 * 예제 입력 1 -
 * 5 2
 * 100 76 85 93 98
 * 예제 입력 2 - 98
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];
rl.on("line", (line) => {
    arr.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    arr[1].sort((a, b) => b - a);

    console.log(arr[1][arr[0][1] - 1]);
});