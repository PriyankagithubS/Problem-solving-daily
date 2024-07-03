
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = "";

inp.on("line", (data) => {
  userInput = data;
});

inp.on("close", () => {
let str=userInput;
function arraySwap(str){
 let charArray = str.split(''); 
    for (let i = 0; i < charArray.length ; i++) {
      let temp = charArray[i];
      charArray[i] = charArray[i + 1];
      charArray[i + 1] = temp;
      i++
    }
    return charArray.join(''); 
  
}
console.log(arraySwap(str));




 
});