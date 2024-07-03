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
    let [a,b,c]=userInput[0].split(' ').map(Number);

  const rigthTriangle=(a,b,c)=>{
    if(a*a+b*b===c*c){
        return 'Yes';
    }
    else if(b*b+c*c===a*a){
        return 'Yes';
    }
    else if(c*c+a*a===b*b){
        return 'Yes';
    }
    else{
        return 'No';
    }
  }
    let result=rigthTriangle(a,b,c);
    console.log(result);
 

    
});