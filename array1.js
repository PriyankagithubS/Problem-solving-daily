const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    
    let N = parseInt(userInput[0]);
  
    let arr = userInput[1].trim().split(' ').map(Number);

    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }

    
    if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }
});
