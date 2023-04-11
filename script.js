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

playAgainButton.style.visibility = "hidden";

function processGuess(event) {
    let count = 0;
    let userGuess = Number(userInput.value); 
    console.log(randomNumber);
    console.log(userGuess);
    event.preventDefault();
    userInput.value = "";

    if (count == 0){
        previousGuesses.textContent = "Previous guesses: ";
    }
    if (userGuess < randomNumber) {
        messageToUser.innerText = "Last guess was too low!"
        messageToUser.style.color = 'blue';
        count++;
        previousGuesses.textContent +=  userGuess + ' ';
    }
    if (userGuess > randomNumber) {
        messageToUser.innerText = "Last guess was too high!"
        messageToUser.style.color = 'red';
        count++;
        previousGuesses.textContent +=  userGuess + ' ';
    }
    if (userGuess === randomNumber) {
        messageToUser.innerText = "Great! You Won!!";
        messageToUser.style.color = 'green';
        userInput.disabled = true;
        sumbitButton.disabled = true;
        playAgainButton.style.visibility = "visible";
    }
}

function refreshPage() {
    location.reload();
}
