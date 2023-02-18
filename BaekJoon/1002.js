/**
 * 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.
 * 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.
 * 조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.
 * 한 줄에 x1, y1, r1, x2, y2, r2가 주어진다. x1, y1, x2, y2는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이고, r1, r2는 10,000보다 작거나 같은 자연수이다.
 * 각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1을 출력한다.
 * 
 * 예제 입력 1
 * 3
 * 0 0 13 40 0 37
 * 0 0 3 0 7 4
 * 1 1 1 1 1 5
 * 예제 출력 1
 * 2
 * 1
 * 0
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on('close', () => {
    let T = input.shift()[0];

    let result = [];
    for (let i = 0 ; i < T ; i++) {
        let [x1, y1, r1, x2, y2, r2] = input[i];
        
        // (x1, y1)와 (x2, y2)사이의 거리
        let lng = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));


        // 1. 겹쳐있는 경우
        if (lng === 0) {
            if (r1 === r2) {
                result.push(-1);
            } else {
                result.push(0);
            }
        } else if (lng === parseInt(r1) + parseInt(r2)) {
            // 2. 바깥으로 붙어 있는 경우
            result.push(1);
        } else if (lng < parseInt(r1) + parseInt(r2)) {
            if (lng + Math.min(r1, r2) < Math.max(r1, r2)) {
                // 3. 원이 안으로 포개져 있는 경우
                result.push(0);
            } else if (lng + Math.min(r1, r2) === Math.max(r1, r2)) {
                // 4. 내접한 경우
                result.push(1);
            } else {
                // 5. 교집합 모양으로 붙어있는 경우
                result.push(2);
            }
        } else {
            // 6. 두 점이 멀리 떨어져 있는 경우
            result.push(0);
        }
    }

    console.log(result.join('\n'));

    process.exit;
});
