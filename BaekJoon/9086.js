// 문제
// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

// 입력
// 입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.

// const readLine = require("readline");
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let flag = false;
// let arr = [];
// rl.on("line", (line) => {
//     if (!flag) {flag = true; return;};
//     if (flag) {
//         arr.push(line);
//     };
// }).on("close", () => {
//     const result = [];
//     arr.map(x => console.log(x.substring(0, 1) + x.substring(x.length - 1, x.length)));

//     console.log(result);

//     process.exit();
// })

let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(input[i].substring(0, 1) + input[i].substring(input[i].length - 1, input[i].length));
}