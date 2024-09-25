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
    // Read input
    let arr1 = userInput[0].split(" ").map(Number);
    let n = arr1[0]; 
    let rameshMarks = arr1[1]; 
    let marks = userInput[1].split(" ").map(Number);  

 
    let found = false;


    for (let i = 0; i < marks.length; i++) {
        if (marks[i] === rameshMarks) {
            console.log(i);  
            found = true;
            break;
        }
    }

    
    if (!found) {
        console.log(-1);
    }
});
