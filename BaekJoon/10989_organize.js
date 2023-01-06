/**
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.
 * 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
 * 
 * 예제 입력 1 -
 * 10
 * 5
 * 2
 * 3
 * 1
 * 4
 * 2
 * 3
 * 5
 * 1
 * 7
 * 예제 출력 1 -
 * 1
 * 1
 * 2
 * 2
 * 3
 * 3
 * 4
 * 5
 * 5
 * 7
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];
let flag = false;
rl.on("line", (line) => {
    if (flag === false) {
        flag = true;
    } else {
        arr.push(parseInt(line));
    }
}).on("close", () => {
    let maxNum = Math.max(...arr);
    let array = Array(maxNum + 1).fill(0);

    for (let i = 0 ; i < arr.length ; i++) {
        array[arr[i]]++;
    }

    for (let i = 0 ; i < array.length ; i++) {
        if (array[i]) {
            for (let j = 0 ; j < array[i] ; j++) {
                console.log(i);
            }
        }
    }

    process.exit;
});