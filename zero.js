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
   function moveZero(arr){
    let position=0;
    let newarr=[];
    for(let start=0;start<arr.length;start++){
        if(arr[start]!=0){
            newarr.push(arr[start]);
            position++;
        }
    }
    for(let start=position;start<arr.length;start++){
       newarr.push(0);
   }
   return newarr;
}

    let B=userInput[0].split(',').map(Number);
    console.log(moveZero(B));
    

  //end-here
});

    
