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
  let [a,b,c]=userInput[0];
  if(a!=b && b!=c &&c!=a){
      console.log("yes");
  }else{
      console.log("no");
  }
  
  
});