/**
 * 어떤 수들이 있을 때, 그 수들을 대표하는 값으로 가장 흔하게 쓰이는 것은 평균이다. 평균은 주어진 모든 수의 합을 수의 개수로 나눈 것이다. 예를 들어 10, 40, 30, 60, 30의 평균은 (10 + 40 + 30 + 60 + 30) / 5 = 170 / 5 = 34가 된다.
 * 평균 이외의 또 다른 대표값으로 중앙값이라는 것이 있다. 중앙값은 주어진 수를 크기 순서대로 늘어 놓았을 때 가장 중앙에 놓인 값이다. 예를 들어 10, 40, 30, 60, 30의 경우, 크기 순서대로 늘어 놓으면
 * 10 30 30 40 60
 * 이 되고 따라서 중앙값은 30이 된다.
 * 다섯 개의 자연수가 주어질 때 이들의 평균과 중앙값을 구하는 프로그램을 작성하시오.
 * 첫째 줄부터 다섯 번째 줄까지 한 줄에 하나씩 자연수가 주어진다. 주어지는 자연수는 100 보다 작은 10의 배수이다.
 * 첫째 줄에는 평균을 출력하고, 둘째 줄에는 중앙값을 출력한다. 평균과 중앙값은 모두 자연수이다.
 * 
 * 예제 입력 1 -
 * 10
 * 40
 * 30
 * 60
 * 30
 * 예제 출력 1 -
 * 34
 * 30
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(parseInt(line));
}).on('close', () => {
    input.sort((a, b) => a - b);

    let index = Math.floor(input.length / 2);
    let centerNum = input[index];

    let plus = input.reduce((prev, cur) => prev + cur);
    let average = plus / input.length;

    console.log(average);
    console.log(centerNum);
    process.exit;
});