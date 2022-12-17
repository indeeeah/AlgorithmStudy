const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    let left = 1;
    let right = 1;
    let count = 1;
    let minusLeft = false;
    
    while (input > count) {
        if (!minusLeft && input > count) {
            count++;
            right++;
            let maxNum = right;
            
            for (let i = maxNum ; i > 1 ; i--) {
                
                if (input > count) {
                    count++;
                    right--;
                    left++;
                } else {
                    break;
                }
            }
            minusLeft = true;
        }
        if (minusLeft && input > count) {
            count++;
            left++;
            let maxNum = left;

            for (let i = maxNum ; i > 1 ; i--) {
                if (input > count) {
                    count++;
                    left--;
                    right++;
                } else {
                    break;
                }
            }
            minusLeft = false;
        }
    }
    console.log(left + '/' + right);
    process.exit;
});