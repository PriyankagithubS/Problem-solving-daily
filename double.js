const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  function modifyAndMoveZeros(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] !== 0 && arr[i] === arr[i + 1]) {
        arr[i] = arr[i] * 2;
        arr[i + 1] = 0;
      }
    }
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      } else {
        zeroCount++;
      }
    }
    for (let i = 0; i < zeroCount; i++) {
      result.push(0);
    }

    return result;
  }

  let B = userInput[0].split(',').map(Number);
  console.log(modifyAndMoveZeros(B));
});
