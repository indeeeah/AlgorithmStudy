/**
 * 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
 * 길이가 짧은 것부터 길이가 같으면 사전 순으로
 * 첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.
 * 조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
 * 
 * 예제 입력 1 -
 * 13
 * but
 * i
 * wont
 * hesitate
 * no
 * more
 * no
 * more
 * it
 * cannot
 * wait
 * im
 * yours
 * 예제 입력 2 -
 * i
 * im
 * it
 * no
 * but
 * more
 * wait
 * wont
 * yours
 * cannot
 * hesitate
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ob = new Set();

function sorting (a, b) {
    let result = 0;
    for (let i = 0 ; i < a.length ; i++) {
        let prev = a.charCodeAt(i);
        let cur = b.charCodeAt(i);

        if (prev < cur) {
            result = -1;
            break;
        }

        if (prev > cur) {
            result = 1;
            break;
        }
    }
    return result;
}

rl.on("line", (line) => {
    if (isNaN(line)) {
        ob.add(line);
    }
}).on("close", () => {
    let arr = [];

    for (let i of ob) {
        arr.push(i);
    }

    arr.sort((a, b) => a.length - b.length || sorting(a, b));
    console.log(arr.join('\n'));
});