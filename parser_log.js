const path = require('path');
const fs = require('fs');
const nameFile = path.join(__dirname,String(process.argv[2]).trim());

let count=0;
let win=0;
let loss=0;
let readableStream = fs.createReadStream(nameFile, "utf8");
let file='';
readableStream.on("data", function(chunk){ 
  file+=chunk;
})
readableStream.on('end',()=>{
    let arrString = file.split('\n');
    for(let str of arrString){
        if(str=='win') win+=1;
        else if (str==''||str=='\n'){count-=1;}
        else loss+=1; 
        count+=1;  
    }
returnResult();
})
function returnResult(){
    console.log(`//////////////////////////////////
/ total number of batches: ${count}     /
/ number of wins/losses: ${win/loss}       /
/ winning percentage: ${win/count*100}%         /`)
}
