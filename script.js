
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1)

    if (computerChoice === 1) {
        computerChoice = 'rock'
    } else if (computerChoice === 2) {
        computerChoice = 'paper'
    } else if (computerChoice === 3) {
        computerChoice = 'scissors'
    }
    
    return computerChoice;
}


function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'tie';
    }
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')){
            return 'computer';
    }
    else {
            return 'player';
    }
}

function playRound(playerSelection, computerSelection) {
    const roundWinner = checkWinner(playerSelection, computerSelection)
    if (roundWinner == 'tie') {
        return "It's a tie!"
    }
    else if (roundWinner == 'player') {
       return `You win! ${playerSelection} beats ${computerSelection}`
    } 
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } 

}

// let playerSelection = "rock";
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()