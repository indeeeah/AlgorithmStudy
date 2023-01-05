/**
 * 알파벳 소문자로만 이루어진 단어 S가 주어진다.
 * 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
 * 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
 * 만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.
 * 
 * 예제 입력 1 - baekjoon
 * 예제 출력 1 - 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let asciiArr = [];
rl.on("line", (line) => {
    input = line;

    for (let i = 0 ; i < line.length ; i ++) {
        asciiArr.push(line[i].charCodeAt(0));
    }
}).on("close", () => {
    let resultArr = [];
    let a = 'a';
    let z = 'z';

    let asciiA = a.charCodeAt(0);
    let asciiZ = z.charCodeAt(0);

    for (let i = asciiA ; i <= asciiZ ; i++) {
        resultArr.push(asciiArr.indexOf(i));
    }

    console.log(resultArr.join(' '));

    process.exit;
});