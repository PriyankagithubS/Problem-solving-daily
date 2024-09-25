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
   let arr=userInput[0].split('').map(Number);
   let arr2=[];
   const oddNumber=(arr)=>{
    for(let start=0;start<arr.length;start++){
        if((arr[start])%2 !=0){
            arr2.push(arr[start])
        }
    }
    return arr2;
   }
   

   console.log(oddNumber(arr).join(" "))
});