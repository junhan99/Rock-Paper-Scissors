function computerSelection() {
    let computerChoice = Math.floor((Math.random() * 3) + 1)

    if (computerChoice === 1) {
        computerChoice = 'Rock'
    } else if (computerChoice === 2) {
        computerChoice = 'Paper'
    } else if (computerChoice === 3) {
        computerChoice = 'Scissors'
    }
    
    return computerChoice
}

// console.log(getComputerChoice())

function playerSelection() {
    let playerChoice = prompt("Please make a selection.", "rock, paper, scissors".toLowerCase());
    
    let text;
    if (playerChoice == null || playerChoice == "") {
    alert("Please Try again, refresh the page.");
    } else {
    return playerChoice
    }

}

function playRound(playerSelection, computerSelection) {
    if 
  }
   
  const playerChoice = playerSelection();
  const computerChoice = computerSelection();
  console.log(playRound(playerChoice, computerChoice));