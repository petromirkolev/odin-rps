let gameChoices = ['rock', 'paper', 'scissors'];
let maxRounds;
let currentRound = 1;
let gameRounds = 0;
let computerScore = 0;
let playerScore = 0;

// Set the playground on page load
(() => {
  maxRounds = Number(prompt('How many rounds would you like to play?'));
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

// Determine the round winner
function roundWinner(computerWeapon, playerWeapon) {
  document.getElementById(
    'current-round'
  ).textContent = `Current round: ${currentRound}`;
  if (computerWeapon === playerWeapon) {
    document.getElementById('winner').textContent = `It's a tie!`;
    return;
  } else if (computerWeapon === 'rock' && playerWeapon === 'scissors') {
    document.getElementById('winner').textContent = `Computer wins!`;
    computerScore++;
  } else if (computerWeapon === 'paper' && playerWeapon === 'rock') {
    document.getElementById('winner').textContent = `Computer wins!`;
    computerScore++;
  } else if (computerWeapon === 'scissors' && playerWeapon === 'paper') {
    document.getElementById('winner').textContent = `Computer wins!`;
    computerScore++;
  } else {
    document.getElementById('winner').textContent = `Player wins!`;
    playerScore++;
  }
  gameRounds++;
}

// Check for winner
function checkWinner() {
  if (currentRound === maxRounds) {
    document.getElementById(
      'current-round'
    ).textContent = `Max rounds reached!`;
    if (computerScore > playerScore) {
      document.getElementById('winner').textContent = `Game winner - Computer!`;
    } else if (computerScore < playerScore) {
      document.getElementById('winner').textContent = `Game winner - Player!`;
    } else {
      document.getElementById('winner').textContent = `Game tie!`;
    }
  }
}

// Start the game on player selection
document.addEventListener('click', (e) => {
  document.getElementById('swoosh-sound').play();

  if (currentRound < maxRounds) {
    currentRound++;
    let computerWeapon = computerChoice();
    let playerWeapon = e.target.id;
    roundWinner(computerWeapon, playerWeapon);
    checkWinner();
  }
});
