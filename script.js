// let gameChoices = ['rock', 'paper', 'scissors'];
// let computerScore = 0;
// let playerScore = 0;
// let gameRounds = 0;

// function computerChoice() {
//   let computerPick = Math.floor(Math.random() * gameChoices.length);
//   return gameChoices[computerPick];
// }

// function playerChoice() {
//   let playerPick = prompt('Choose your weapon - rock, paper or scissors!');
//   return playerPick;
// }

// function gamePlay() {
//   let computer = computerChoice();
//   let player = playerChoice();

//   if (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
//     console.log(
//       'Incorrect player input! Please pick between rock, paper or scissors only!'
//     );
//     return;
//   }

//   if (computer === 'rock' && player === 'scissors') {
//     computerScore++;
//     alert('Computer wins!');
//     gamePlay();
//   } else if (computer === 'paper' && player === 'rock') {
//     computerScore++;
//     alert('Computer wins!');
//     gamePlay();
//   } else if (computer === 'scissors' && player === 'paper') {
//     computerScore++;
//     alert('Computer wins!');
//     gamePlay();
//   } else if (computer === player) {
//     alert("It's a tie!");
//     return;
//   } else {
//     playerScore++;
//     alert('Player wins!');
//   }
//   gameRounds++;
// }

// while (gameRounds < 5) {
//   gamePlay();
// }

// computerScore > playerScore
//   ? alert(
//       `Computer wins! Computer score = ${computerScore} Player score = ${playerScore}`
//     )
//   : alert(
//       `Player wins! Player score = ${playerScore} Player score = ${computerScore}`
//     );
