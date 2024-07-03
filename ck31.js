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

//   var n = userInput[0].split(" ");
//   var s = +n[1];
//   var coins = userInput[1].split(" ").map(Number);
//   var count = 0;
//   for(var i=coins.length-1;i>=0;i--){
//       while(s>=coins[i]){
//           s-=coins[i];
//           count++;
//       }
//   }
//   if(s!=0){
//       console.log(-1);
//   }else{
//       console.log(count);
//   }
// right angle triangle or not
// let a = +userInput[0];
// let b = +userInput[1];
// let c = +userInput[2];
// if(a*a + b*b == c*c){
//     console.log("Yes");
// }else{
//     console.log("No");
//output is wrong
let a = +userInput[0];
let b = +userInput[1];
let c = +userInput[2];
if(a+b+c == 180){
    console.log("Yes");
}else{
    console.log("No");
}


});