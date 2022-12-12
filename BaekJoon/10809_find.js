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