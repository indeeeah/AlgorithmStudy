const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    if(input >= 90 && input <= 100) {
        console.log("A");
    }else if(input >= 80 && input <= 89) {
        console.log("B");
    }else if(input >= 70 && input <= 79) {
        console.log("C");
    }else if(input >= 60 && input <= 69) {
        console.log("D");
    }else if(59) {
        console.log("F");
    }
    process.exit;
})