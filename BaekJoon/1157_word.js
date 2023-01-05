/**
 * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
 * 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
 * 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
 * 
 * 예제 입력 1 - Mississipi
 * 예제 출력 1 - ?
 * 예제 입력 2 - zZa
 * 예제 출력 2 - Z
 * 예제 입력 3 - z
 * 예제 출력 3 - Z
 * 예제 입력 4 - baaa
 * 예제 입력 4 - A
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
}).on("close", () => {
    let arr = [];
    let countArr = [];
    for (let i = 0 ; i < input.length ; i++) {
        let index = arr.findIndex((element) => {
            return element.word === input[i].toUpperCase();
        });

        if (index > -1) {
            arr[index].count++;
        } else {
            arr.push({
                word: input[i].toUpperCase(),
                count: 1
            });
        }
    }

    for (let i = 0 ; i < arr.length ; i++) {
        countArr.push(arr[i].count);
    }

    countArr.sort((a, b) => b - a);

    let maxCount = countArr[0];
    let maxWord = arr.filter((element) => {
        return element.count === maxCount;
    });

    if (maxWord.length > 1) {
        console.log('?');
    } else {
        console.log(maxWord[0].word);
    }

    process.exit;
});