let gameChoices = ['rock', 'paper', 'scissors'];
let maxRounds;
let currentRound = 1;
let gameRounds = 0;
let computerScore = 0;
let playerScore = 0;

// Set the playground on page load
(() => {
  let maxRounds = prompt('How many rounds would you like to play?');
  document.getElementById(
    'max-rounds'
  ).textContent = `Max rounds: ${maxRounds}`;
  document.getElementById(
    'current-round'
  ).textContent = `Current round: ${currentRound}`;
  document.getElementById('winner').textContent = `Start the game!`;
  document.getElementById('winner').style.backgroundColor = 'red';
})();

// Get the computer choice (rock, paper or scissors)
function computerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// Start the game on player selection
document.addEventListener('click', (e) => {});
