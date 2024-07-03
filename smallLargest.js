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
    let arr=userInput[1].split(' ').map(Number);
  
const smallLarge=(arr)=>{
    let minNum=0;
    let maxNum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[minNum]){
            minNum=i;
        }
        if(arr[i]>arr[maxNum]){
           maxNum=i;
        }
       
    }
    return [minNum + 1, maxNum + 1]
}


   let result=smallLarge(arr);
    console.log(result.join(' '));
});