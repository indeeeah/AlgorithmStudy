/**
 * 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
 * 1/1	1/2	1/3	1/4	1/5	…
 * 2/1	2/2	2/3	2/4	…	…
 * 3/1	3/2	3/3	…	…	…
 * 4/1	4/2	…	…	…	…
 * 5/1	…	…	…	…	…
 * …	…	…	…	…	…
 * 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 * 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
 * 첫째 줄에 분수를 출력한다.
 * 
 * 예제 입력 1 - 1
 * 예제 출력 1 - 1/1
 * 예제 입력 2 - 2
 * 예제 출력 2 - 1/2
 * 예제 입력 3 - 3
 * 예제 출력 3 - 2/1
 * 예제 입력 4 - 4
 * 예제 출력 4 - 3/1
 */


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let left = 1;
    let right = 1;
    let count = 1;
    let minusLeft = false;
    
    while (input > count) {
        if (!minusLeft && input > count) {
            count++;
            right++;
            let maxNum = right;
            
            for (let i = maxNum ; i > 1 ; i--) {
                
                if (input > count) {
                    count++;
                    right--;
                    left++;
                } else {
                    break;
                }
            }
            minusLeft = true;
        }
        if (minusLeft && input > count) {
            count++;
            left++;
            let maxNum = left;

            for (let i = maxNum ; i > 1 ; i--) {
                if (input > count) {
                    count++;
                    left--;
                    right++;
                } else {
                    break;
                }
            }
            minusLeft = false;
        }
    }
    console.log(left + '/' + right);
    process.exit;
});