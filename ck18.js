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
  let [a,b,c]=userInput[0].split(' ').map(Number);
function canFormCircle(a,b,c){
    if(b+c>a && c+a>b && a+b>c){
        return "yes";
    }
    else{
        return "no";
    }
}

  console.log(canFormCircle(a,b,c));

  //end-here
});