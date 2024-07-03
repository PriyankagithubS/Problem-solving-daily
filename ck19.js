// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
let [b,h]=userInput[0].split(' ').map(Number);
const triangleArea=(b,h)=>{
    let result=1/2*(b*h);
    return result;
}
console.log(triangleArea(b,h));

  
});