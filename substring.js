// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  function checkString(A, B) {
    let start = 0;
    for (let next = 0; next < B.length; next++) {
      if (A[start] === B[next]) {
        start++;
      }
    }
    return start === A.length;
  }
  
  let x = userInput[0];
  let y = userInput[1];
  console.log(checkString(x, y));
});
