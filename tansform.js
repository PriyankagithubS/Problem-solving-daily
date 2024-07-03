
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];

inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    let x=userInput[0].split('').map(Number);
function transCount(arr){
let count=0;
let start=0;
while(start<arr.length){
    if(arr[start]!=0){
        count++;
        start+=3;
    }
    else{
        start++;
    }
}
return count;

}
console.log(transCount(x));


});