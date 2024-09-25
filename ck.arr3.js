const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = parseInt(userInput[0]);
    let arr = userInput[1].split(" ").map(Number);
    let k = parseInt(userInput[2]);

    function firstNegativeInteger(arr, n, k) {
        let resultArr = [];

        for (let i = 0; i <= n - k; i++) {
            let firstNeg = 0;

            for (let j = i; j < i + k; j++) {
                if (arr[j] < 0) {
                    firstNeg = arr[j];
                    break;
                }
            }

           
            resultArr.push(firstNeg);
        }

        return resultArr.join(" ");
    }

    console.log(firstNegativeInteger(arr, n, k));
});
