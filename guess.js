let guessInput = document.querySelector("#guessInput");
let btn = document.querySelector("#btn");
let message = document.querySelector("#message");
let previousGuesses = document.querySelector("#previousGuesses");
let remainingGuesses = document.querySelector("#remainingGuesses");
let restartGame = document.querySelector("#restartGame")
let prevArray = [];
let RandomNum = Number((Math.random()*100+1).toFixed(0))
let remaining = 10;
console.log(RandomNum);
console.log(prevArray);

function Takeval() {
    let value = guessInput.value;
    if (value == RandomNum) {
        message.innerText = "YAY! you guessed it right";
        document.body.style.background = "lightgreen"
        
    }
}
function appendPrev(params) {
    let value = guessInput.value;

     prevArray.push(value)
     if (prevArray.length <= 10) {

         previousGuesses.innerText = prevArray[prevArray.length-1];
        
     }

}
function decreament() {
 if(remaining > 0){
    --remaining
    remainingGuesses.innerText = remaining
 }
    
}
function Refrence() {
   let value = guessInput.value;
if (value>RandomNum) {
    message.innerText = "value is High"
}else if(value<RandomNum){
    message.innerText = "value is low"
}
   
}
function stopGame() {
   restartGame.style.display = "block"
    startGame()
}
function startGame() {
    console.log("starting new game session");
    RandomNum = Number((Math.random()*100+1).toFixed(0))
    console.log(RandomNum);
    restartGame.addEventListener('click',function(){
        document.body.style.background ="linear-gradient(135deg, #1d2671, #c33764)";
    guessInput.value=''
    remaining= 10;
    remainingGuesses.innerText = 10;
    
    previousGuesses.innerText = ''
    prevArray = [null]
    message.innerText = 'start'
    restartGame.style.display = "none"
    })
}


btn.addEventListener('click',()=>{
    
const value = Number(guessInput.value);

   if (remaining <=0) {
    message.textContent =`Oops! Your chances are completed Value :${RandomNum}`
    stopGame()
    return
   }
   if (value==RandomNum ) {
    console.log("inside right condition");
    Takeval()
    stopGame()
    return
   }

if (!isNaN(value) && value >= 1 && value <= 100) {
    Takeval();
    appendPrev();
    decreament();
    Refrence()
    guessInput.value = ""
}
else {
    message.textContent = "Enter a valid number (1-100)";
}
})



