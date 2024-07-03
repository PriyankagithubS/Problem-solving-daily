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
  //start-here
  //Your code goes here … replace the below line with your code logic 
  function arrange(nums){
    let odd=[];
    let even=[];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
          even.push(nums[i]);
        } else {
          odd.push(nums[i]);
        }
      }
      odd.sort((a, b) => b - a);
      even.sort((a, b) => a - b);
      return [...odd, ...even];
    }
 let x=userInput[0].split(',').map(Number);
 
 let result=arrange(x);
 console.log(x[6])
 console.log(result.join(' ')); 


  //end-here
});