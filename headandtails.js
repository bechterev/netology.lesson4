const path = require('path');
const fs = require('fs');
const readline = require('readline');
const nameFile = path.join(__dirname,String(process.argv[2]).trim());
let exit = false;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let genNumb = Math.floor((Math.random()*2))+1;
console.log(genNumb);

function game(){
    rl.question('The game is guessing a random number, try to guess 1 or 2 \n',(value)=>
{
    value = value.trim();
    if(value == genNumb)  {
        fs.appendFileSync(nameFile,'win\n');
        rl.setPrompt('you win, from exit press "q". Try new push "y"');
        rl.prompt()
    }

    else{
        fs.appendFileSync(nameFile,'loss\n')
        rl.setPrompt('you loss, from exit "q". Try new push "y"'+'\n');
        rl.prompt();
    }
    rl.on('line',(value)=>{
        if(value == 'q')  { rl.close();}
        if(value == 'y') {game();}
        

    })
})
}
game()

rl.on('close',()=>{console.log(`game over, good by`)
exit=true;});

