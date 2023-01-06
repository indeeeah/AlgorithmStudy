/**
 * 수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.
 * 산술평균 : N개의 수들의 합을 N으로 나눈 값
 * 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
 * 최빈값 : N개의 수들 중 가장 많이 나타나는 값
 * 범위 : N개의 수들 중 최댓값과 최솟값의 차이
 * N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.
 * 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
 * 둘째 줄에는 중앙값을 출력한다.
 * 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
 * 넷째 줄에는 범위를 출력한다.
 * 
 * 예제 입력 1 -
 * 5
 * 1
 * 3
 * 8
 * -2
 * 2
 * 예제 출력 1 -
 * 2
 * 2
 * 1
 * 10
 * 예제 입력 2 -
 * 1
 * 4000
 * 예제 출력 2 -
 * 4000
 * 4000
 * 4000
 * 0
 * 예제 입력 3 -
 * 5
 * -1
 * -2
 * -3
 * -1
 * -2
 * 예제 출력 3 -
 * -2
 * -2
 * -1
 * 2
 * 예제 입력 4 -
 * 3
 * 0
 * 0
 * -1
 * 예제 츨력 4 -
 * 0
 * 0
 * 0
 * 1
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = false;
let arr = [];
rl.on("line", (line) => {
    let num = parseInt(line);

    if (flag === false) {
        flag = true;
    } else {
        arr.push(num);
    }
}).on("close", () => {
    arr.sort((a, b) => a - b);
    let index = Math.ceil(arr.length / 2) - 1;
    let plus = arr.reduce((prev, cur) => prev + cur);
    let average = Math.round(plus / arr.length);
    let centerNum = arr[index];
    
    let arr2 = [];
    for (let i = 0 ; i < arr.length ; i++) {
        let idx = arr2.findIndex((element) => element.num === arr[i]);

        if (idx > -1) {
            arr2[idx].count++;
        } else {
            arr2.push({
                num: arr[i],
                count: 1
            });
        }
    }

    let maxCount = -1;
    for (let i = 0 ; i < arr2.length ; i++) {
        if (arr2[i].count > maxCount) {
            maxCount = arr2[i].count;
        }
    }
    arr2 = arr2.filter((item) => item.count === maxCount);

    let arr3 = [];
    for (let i = 0 ; i < arr2.length ; i++) {
        arr3.push(arr2[i].num);
    }
    arr3.sort((a, b) => a - b);
    let many = arr3.length > 1 ? arr3[1] : arr3[0];

    let min = arr[0];
    let max = Math.max(...arr);
    let range = max - min;

    console.log(average === -0 ? 0 : average);
    console.log(centerNum);
    console.log(many);
    console.log(range);

    process.exit;
});