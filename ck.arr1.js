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
let n=userInput[0].split(" "); 
let arr=userInput[1].split(" "); 

const findTwiceNumber =(n,arr)=>{
    let couterSet={};

    for(let start=0;start<arr.length;start++){
        let num=arr[start];
        if (couterSet[num]===undefined){
            couterSet[num]=1;
        }
        else{
            couterSet[num]++;
        }
    }
    for(let num in couterSet){
        if(couterSet[num]===2){
            return parseInt(num);
        }
    }
}



console.log(findTwiceNumber(n,arr));

    
});