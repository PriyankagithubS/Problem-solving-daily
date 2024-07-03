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
  let A = userInput[0].split(',').map(Number);
  let B = userInput[1].split(',').map(Number);

  function extraElement(arr1, arr2) {
    let flag;
    for (let start = 0; start < arr1.length; start++) {
      let found = false;
      for (let next = 0; next < arr2.length; next++) {
        if (arr1[start] === arr2[next]) {
          found = true;
          break;
        }
      }
      if (!found) {
        flag = start;
        break;
      }
    }
    return flag;
  }

  console.log(extraElement(A, B));
});
