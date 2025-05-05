// Get DOM elements
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

// Game variables
let userChoice;
let computerChoice;

// Add click event to buttons
possibleChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.textContent = userChoice;
        generateComputerChoice();
        determineWinner();
    });
});

// Generate computer's choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    
    computerChoiceDisplay.textContent = computerChoice;
}

// Determine winner
function determineWinner() {
    if (userChoice === computerChoice) {
        resultDisplay.textContent = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
    } else {
        resultDisplay.textContent = 'You lose!';
    }
}