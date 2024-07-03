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
  //start-here
  //Your code goes here … replace the below line with your code logic 
  function count(amount){
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    let counter = new Array(9).fill(false);
    
    for (let start = 0; start < notes.length; start++) {
        if (amount >= notes[start]) {
            counter[start] = Math.floor(amount / notes[start]);
            amount %= notes[start]; // Update the amount to the remaining value after counting notes
        }
    }
    
    let result = '';
    for (let i = 0; i < counter.length; i++) {
        if (counter[i] ) {
            result += notes[i] + ' : ' + counter[i] +'   ';
        }
    }
    return result;
  }

  let x = parseInt(userInput[0]);
  console.log(count(x).split('  ').join("\n"));
  //end-here
});
