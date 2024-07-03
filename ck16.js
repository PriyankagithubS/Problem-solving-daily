const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 let N=userInput[0];
 let arr=userInput[1].split(' ').map(Number);
 let res = arr[0];

 
 for (let i = 1; i < N; i++) {
   res &= arr[i];
 }

 console.log(res);
});
