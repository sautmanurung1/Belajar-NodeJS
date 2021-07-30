const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let num1 = Math.floor((Math.random() * 10 ) + 1);
let num2 = Math.floor((Math.random() * 10 ) + 1);
let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2}? \n`, 
(userInput)=> {
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect Respone Please try again!\n');
        rl.prompt();
        rl.on('line', (userInput)=> {
            if(userInput.trim() == answer)
                rl.close();
            else{
                rl.setPrompt(`Your answare of ${userInput} is incorrect Please Try Again ! \n`)
                rl.prompt();
            }
        });
    }
});

rl.on('close',()=> {
    console.log('Correct!!!!!!');
});