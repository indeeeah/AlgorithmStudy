/**
 * 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.
 * 크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.
 * ***
 * * *
 * ***
 * N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.
 * 첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.
 * 첫째 줄부터 N번째 줄까지 별을 출력한다.
 * 
 * 예제 입력 1 - 27
 * 예제 출력 1 -
 * ***************************
 * * ** ** ** ** ** ** ** ** *
 * ***************************
 * ***   ******   ******   ***
 * * *   * ** *   * ** *   * *
 * ***   ******   ******   ***
 * ***************************
 * * ** ** ** ** ** ** ** ** *
 * ***************************
 * *********         *********
 * * ** ** *         * ** ** *
 * *********         *********
 * ***   ***         ***   ***
 * * *   * *         * *   * *
 * ***   ***         ***   ***
 * *********         *********
 * * ** ** *         * ** ** *
 * *********         *********
 * ***************************
 * * ** ** ** ** ** ** ** ** *
 * ***************************
 * ***   ******   ******   ***
 * * *   * ** *   * ** *   * *
 * ***   ******   ******   ***
 * ***************************
 * * ** ** ** ** ** ** ** ** *
 * ***************************
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function makeStar (i, j) {
    if (i % 3 === 1 && j % 3 === 1) {
        str += " ";
    } else {
        if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
            str += "*";
        } else {
            makeStar(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}

let str = '';
rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    for (let i = 0 ; i < input ; i++) {
        for (let j = 0 ; j < input ; j++) {
            makeStar(i, j);
        }
        if (i !== input - 1) {
            str += '\n';
        }
    }

    console.log(str);
});