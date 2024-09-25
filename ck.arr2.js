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
    
  let arr1=userInput[1].split(" ");
  let arr2=userInput[2].split(" ");

const MergeArray=(arr1,arr2)=>{
    let assc=arr1.sort((a,b)=>a-b);
    let desc=arr2.sort((a, b)=>b-a);    
    let result=[...assc,...desc];
    return result.join(" ");
}




  console.log(MergeArray(arr1,arr2));
   
});