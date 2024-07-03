const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
});
inp.on("close", () => {
    function isAlphabetic(char) {
        return /^[a-zA-Z]$/.test(char);
    }

    function reverseFunc(str) {
        let arr = str.split('');
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (isAlphabetic(arr[start]) && isAlphabetic(arr[end])) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            } else {
                if (!isAlphabetic(arr[start])) {
                    start++;
                }
                if (!isAlphabetic(arr[end])) {
                    end--;
                }
            }
        }
        return arr.join('');
    }
    const inputStr = userInput.join('');
    console.log(reverseFunc(inputStr));
});
