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
    let arr = userInput[0].split('').map(Number);

    const removeAdjacentDuplicates = (arr) => {
        let resultArray = [];
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i] !== arr[i + 1]) {
                resultArray.push(arr[i]);
            } else {
                
                i++;
            }
        }
        return resultArray;
    }

    let result = removeAdjacentDuplicates(arr).join('');

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log(-1);
    }
});
