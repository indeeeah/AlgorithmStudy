/**
 * N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.
 * 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.
 * 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.
 * 
 * 예제 입력 1 -
 * 3 3
 * 1 1 1
 * 2 2 2
 * 0 1 0
 * 3 3 3
 * 4 4 4
 * 5 5 100
 * 예제 출력 1 -
 * 4 4 4
 * 6 6 6
 * 5 6 100
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let inputArr = [];
rl.on("line", (line) => {
    inputArr.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let n = inputArr[0][0];
    let m = inputArr[0][1];
    let resultArr = [];

    for (let i = 1 ; i <= n ; i++) {
        let arr = [];
        for (let j = 0 ; j < m ; j++) {
            arr.push(inputArr[i][j] + inputArr[i + n][j]);
        }
        resultArr.push(arr.join(' '));
    }

    console.log(resultArr.join('\n'));

    process.exit;
});