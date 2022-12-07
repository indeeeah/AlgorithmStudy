const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    let defaultDate = "2022-12-07";
    let time = defaultDate + " " + input[0][0] + ":" + input[0][1] + ":00";
    time = new Date(time).getTime() + (input[1]*60*1000);
    time = new Date(time).toString();
    time = time.split(':');
    time[0] = time[0].substr(-2);
    time[0] = (/^0/).test(time[0]) ? time[0].substring(1) : time[0];
    time[1] = (/^0/).test(time[1]) ? time[1].substring(1) : time[1];
    console.log(time[0] + " " + time[1]);
})