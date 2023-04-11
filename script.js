// Generating a random number between 500 and 5000
const min = 500
const max = 5000
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 500;
// Math.random() returns a number between 0 and 1 (excluding 1), now to make the scale
// from 500 to 5K, I found this formula: Math.floor(Math.random() * (max - min + 1)) + min
// so now our range is (0, max - min + 1), and we add 500 to shift it to (min, max + 1) 
// Math.floor() to round to the nearest integer
let userInput = document.getElementById('inputGuess');
let previousGuesses = document.getElementById('attempts');
let messageToUser = document.getElementById('messageToUser');
let sumbitButton = document.getElementById('sumbitButton');
const playAgainButton = document.getElementById("playAgainButton");
const winOrLoseBG = document.getElementById("customBackground");
let previousGuessesArr = [];

playAgainButton.style.visibility = "hidden";

function processGuess(event) {

    if (previousGuessesArr.length < 10) {
    let userGuess = Number(userInput.value); 
    previousGuessesArr.push(userGuess);
    renderAttempts();
    console.log(randomNumber);
    console.log(userGuess);
    event.preventDefault();
    userInput.value = "";    
   
    if (userGuess < randomNumber) {
        messageToUser.innerText = "Last guess was too low!"
        messageToUser.style.color = 'blue';
    }
    if (userGuess > randomNumber) {
        messageToUser.innerText = "Last guess was too high!"
        messageToUser.style.color = 'red';
    }
    if (userGuess === randomNumber) {
        messageToUser.innerText = "Great! You Won!!";
        messageToUser.style.color = 'white';
        winOrLoseBG.style.backgroundColor = 'green';
        messageToUser.style.padding = '10px';
        userInput.disabled = true;
        sumbitButton.disabled = true;
        playAgainButton.style.visibility = "visible";
    }
}
else {
    messageToUser.innerText = " !! GAME OVER !!";
    messageToUser.style.color = 'white';
    winOrLoseBG.style.backgroundColor = 'red';
    messageToUser.style.padding = '10px';
    userInput.disabled = true;
    sumbitButton.disabled = true;
    playAgainButton.style.visibility = "visible";
}
}
function renderAttempts() {
    previousGuesses.innerText = 'Previous guesses: ' + previousGuessesArr.join(' - ');
}
function refreshPage() {
    location.reload();
}
