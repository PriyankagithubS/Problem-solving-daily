const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {
    let N = parseInt(userInput[0]);
    let arr = userInput[1].split(',').map(Number);

    function numMissing(arr, N) {
        let expectedSum = (N * (N + 1)) / 2; 
        let actualSum = 0;

        for (let i = 0; i < arr.length; i++) {
            actualSum += arr[i];
        }

        return expectedSum - actualSum;
    }

    console.log(numMissing(arr, N));
});
