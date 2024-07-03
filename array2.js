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
    let N=parseInt(userInput[0]);
    let passportNumbers=userInput[1].split(" ");
    let uniqueNumbers=[];
    for(let i=0;i<N;i++){
        if(uniqueNumbers.indexOf(passportNumbers[i])==-1){
            uniqueNumbers.push(passportNumbers[i]);
        }
    }
    console.log(uniqueNumbers.join(','));
});