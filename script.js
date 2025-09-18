let randomNumber=parseInt(Math.random() * 100 + 1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworHi=document.querySelector('.loworHi');
const startOver=document.querySelector('.resultParas');

//const p=document.createElement('p');
const button=document.createElement('button');


let prevGuess=[];
let numGuess=2;

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
    });
}
function validateGuess(guess){
   if(isNaN(guess)){
     alert('Please enter a valid number!')
     userInput.value=''
   }else if(guess<1){
    alert('Please enter a number more than one(1)')
    userInput.value=''
   }else if(guess>100){
    alert('Please enter a number less than 100')
    userInput.value=''
  }
   else{
   prevGuess.push(guess)
   if(numGuess===11){
     displayGuess(guess)
     displayMessage(`Game Over :Random Number was ${randomNumber}`)
     endGame()  
   }
   else{
    displayGuess(guess)
    checkGuess(guess)
   }
   }
}
function checkGuess(guess){
if(guess===randomNumber){
  displayMessage('You guess it Right!')
  endGame()
}
else if(guess<randomNumber){
  displayMessage('Number is Too Low!')
}
else if(guess>randomNumber){
  displayMessage('Number is Too High!')
}
}
function displayGuess(guess){ // or function:function cleanupGuess(){}
userInput.value=''
guessSlot.innerHTML+=`${guess}, `;
numGuess++;
remaining.innerHTML=`${12-numGuess} `
}
function displayMessage(message){
loworHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
button.setAttribute('type','button')
button.classList.add('button')
button.innerHTML='<h2  id="newGame">Start New Game </h2> ';
startOver.appendChild(button)
playGame=false
newGame();
}
function newGame(){
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
randomNumber=parseInt(Math.random() * 100 + 1);
prevGuess=[];
numGuess=2;
guessSlot.innerHTML='';
remaining.innerHTML=`${12-numGuess} `
userInput.removeAttribute('disabled');
button.removeAttribute('type','button')
startOver.removeChild(button);
displayMessage('')
playGame=true;
}
)
}