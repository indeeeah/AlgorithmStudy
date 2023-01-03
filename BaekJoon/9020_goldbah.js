const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];
rl.on("line", (line) => {
    arr.push(parseInt(line));
}).on("close", () => {
    for (let i = 1 ; i < arr.length ; i++) {
        let nums = new Set();
        
        for (let j = 2 ; j <= arr[i] ; j++) {
            nums.add(j);
        }

        let sqr = Math.sqrt(arr[i]);

        for (let j = 2 ; j <= sqr ; j++) {
            for (let z = j + j ; z <= arr[i] ; z += j) {
                nums.delete(z);
            }
        }

        let numsArr = [];
        for (let j of nums.values()) {
            numsArr.push(j);
        }

        let flag = false;
        for (let j = 0 ; j < numsArr.length ; j++) {
            for (let z = 0 ; z < numsArr.length ; z++) {
                if (numsArr[j] + numsArr[z] === arr[i]) {
                    console.log(numsArr[j] + ' ' + numsArr[z]);
                    flag = true;
                    break;
                }
            }
            if(flag === true) {
                break;
            }
        }
    }
});