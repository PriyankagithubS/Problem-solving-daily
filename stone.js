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
let [a,b]=userInput[0].split(" ");

if(a==='R' && b==='P'){
    console.log("P");
}
else if(a==='R' && b==='S'){
    console.log("R");
}
else if(a==='P' && b==='R'){
    console.log("P");
}
else if(a==='P' && b==='S'){
    console.log("S");
}
else if(a==='S' && b==='R'){
    console.log("R");
}
else if(a==='S' && b==='P'){
    console.log("S");
}
else{
    console.log("D");
}    
});