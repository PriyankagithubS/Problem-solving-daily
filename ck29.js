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
  let [x1,y1]=userInput[0].split(' ');
  let [x2,y2]=userInput[1].split(' ');
  let [x3,y3]=userInput[2].split(' ');
  let [x4,y4]=userInput[3].split(' ');

const distanceSquare= (x1,y1,x2,y2)=>{
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
}   
const isSquare=(x1,y1,x2,y2,x3,y3,x4,y4)=>{
    let d1=distanceSquare(x1, y1, x2, y2);
    let d2=distanceSquare(x1, y1, x3, y3);
    let d3=distanceSquare(x1, y1, x4, y4);
    let d4=distanceSquare(x2, y2, x3, y3);

if(d1==d2 && d2==d3 && d3==d4 && d1!=0){
  let d5=distanceSquare(x2,y2,x4,y4);
  let d6=distanceSquare(x3, y3, x4, y4);
  if(d5==d6){
    return true;
  }
  }
  return false;
}
if(isSquare(x1, y1, x2, y2, x3, y3, x4, y4)){
    console.log("yes");
}else{
    console.log("no");
}

// console.log(userInput


//   if(a!=b && b!=c &&c!=a){
//       console.log("yes");
//   }else{
//       console.log("no");
//   }
  
});