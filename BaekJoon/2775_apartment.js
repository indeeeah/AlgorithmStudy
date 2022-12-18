const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    let t = input.shift();

    for (let i = 0 ; i < t ; i++) {
        let k = input.shift();
        let n = input.shift();

        let house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

        for (let j = 1; j <= n ; j++) {
            house[0][j] = j;
        }

        for (let j = 1 ; j <= k ; j++) {
            for (let z = 1 ; z <= n ; z++) {
                house[j][z] = house[j - 1][z] + house[j][z - 1];
            }
        }
        
        console.log(house[k][n]);
    }
});