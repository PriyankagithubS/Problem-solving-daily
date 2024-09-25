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
    let n = userInput[0]; 
    let arr = userInput[1].split(" ").map(Number)

    const minNumber = (arr) => {
        let min = arr[0];  
        for (let start = 1; start < arr.length; start++) {
            if (arr[start] < min) {
                min = arr[start];
            }
        }
        return min;
    }

    console.log(minNumber(arr));
});
