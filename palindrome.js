// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    function isPalindrome(str) {
        let start = 0;
        let end = str.length - 1;
  
        while (start < end) {
            
            // while (!isAlphanumeric(str[start])) {
            //     start++;
            // }
            // while (!isAlphanumeric(str[end])) {
            //     end--;
            // }
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    if (isPalindrome(userInput[0])) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }  

});
