const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 function keyPair(n,arr){
  for(let start=0;start<arr.length;start++){
    for(let next=start+1;next<arr.length;next++){
        if((arr[start]+arr[next])===n){
          return true;
        }
    }
  }  
  return false;
 }
let N=parseInt(userInput[0]);
let arr=userInput[1].split(',').map(Number);
if(keyPair(N,arr)){
    console.log("yes");
}
else{
    console.log("No");
}

});
