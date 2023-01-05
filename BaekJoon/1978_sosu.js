/**
 * 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
 * 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
 * 주어진 수들 중 소수의 개수를 출력한다.
 * 
 * 예제 입력 1 -
 * 4
 * 1 3 5 7
 * 예제 출력 1 - 3
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resCount = 0;
rl.on("line", (line) => {
    let arr = line.split(' ').map((element) => parseInt(element));

    if (arr.length > 1) {
        for (let i = 0 ; i < arr.length ; i++) {
            let count = 0;

            for (let j = 1 ; j <= arr[i] ; j++) {
                if (arr[i] % j === 0) {
                    count++;
                }
            }

            if (count === 2) {
                resCount++;
            }
        }
    }
}).on("close", () => {
    console.log(resCount);
});