const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let [a, b] = userInput[0].split(' ').map(Number);
    function gcd(x, y) {
      while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    }
    let result = gcd(a, b);
  
    console.log(result);
});
