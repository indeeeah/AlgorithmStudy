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
        let nums = [];
        
        for (let j = 2 ; j <= arr[i] ; j++) {
            nums[j] = j;
        }

        let sqr = Math.sqrt(arr[i]);

        for (let j = 2 ; j <= sqr ; j++) {
            for (let z = j + j ; z <= arr[i] ; z += j) {
                nums[z] = 0;
            }
        }

        nums = nums.filter(item => item !== 0);

        let answer = [];
        for (let j = 0 ; nums[j] < arr[i] / 2 + 1 ; j++) {
            let index = nums.indexOf(arr[i] - nums[j]);

            if (index !== -1) {
                answer.push([nums[j], nums[index]]);
            }
        }

        let ans = answer.pop();

        console.log(`${ans[0]} ${ans[1]}`);
    }
});