const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  userInput.forEach(line => {
    let [kt, ot] = line.split(' ').map(Number);
    let result = Math.abs(ot - kt);
    console.log(result);
  });
});
