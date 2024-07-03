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
  let x=userInput[0].split(',').map(Number);
  function findSingle(arr){
    for (let start = 0; start < arr.length; start++) {
        let found = false;
        for (let next = start + 1; next < arr.length; next++) {
          if (arr[start] === arr[next]) {
            found = true;
            break;
          }
        }
        if (!found) {
          return arr[start];
        }
      }
  }
  console.log(findSingle(x));
    

  //end-here
});

    
