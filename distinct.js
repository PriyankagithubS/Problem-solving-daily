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
function distictDigit(nums){
  let digitSeen = new Array(10).fill(false); 
  let result=[];
  for(let start=0;start<nums.length;start++){
    let num=nums[start];
    while(num>0){
      let dig=num%10;
      digitSeen[dig]=true;
      num = Math.floor(num / 10);
    }
  }
  for(let i=0;i<10;i++){
    if(digitSeen[i]){
      result.push(i);
    }
  }
  return result;
}
 let x=userInput[0].split(',').map(Number);
 let result=distictDigit(x);
 console.log(result.join(' ')); 


  //end-here
});