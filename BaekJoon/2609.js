/**
 * 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
 * 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.
 * 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.
 * 
 * 예제 입력 1 - 24 18
 * 예제 출력 1
 * 6
 * 72
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    input = line.split(' ').map((element) => parseInt(element));
}).on('close', () => {
    // let result = 1;
    
    // for (let i = 2 ; i < Math.min(...input) ; i++) {
    //     while (input[0] % i === 0 && input[1] % i === 0) {
    //         input[0] = input[0] / i;
    //         input[1] = input[1] / i;

    //         result = result * i;
    //     }

    //     if (i === Math.min(...input)) {
    //         console.log(result);

    //         result = result * input[0] * input[1];

    //         console.log(result);

    //         break;
    //     }
    // }
    process.exit;
});
