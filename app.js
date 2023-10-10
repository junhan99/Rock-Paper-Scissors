function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1)

    // if (computerChoice === 1) {
    //     computerChoice = 'Rock'
    // } else if (computerChoice === 2) {
    //     computerChoice = 'Paper'
    // } else if (computerChoice === 3) {
    //     computerChoice = 'Scissors'
    // }
    
    return computerChoice
}

// console.log(getComputerChoice())

function getPlayerChoice() {
    let playerChoice = prompt("Please make a selection.", "rock, paper, scissors").toLowerCase();
    
    if (playerChoice == null || playerChoice == "") {
    alert("Please Try again, refresh the page.");
    } else {
        if (playerChoice === 'rock') {
            return 1
        } else if (playerChoice === 'paper'){
            return 2
        } else if (playerChoice === 'scissors'){
            return 3
        } else {
            alert ('Please Try again, refresh the page.')
        }     
    }
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 1 && computerSelection === 3){
        return 'You win! Rock beats Scissors!'
    } else if (computerSelection === 1 && PlayerSelection === 3){
        return 'You Lose! Scissors loses to Rock!'
    } else if (computerSelection > playerSelection) {
        return 'You lose' 
    } else if (playerSelection > computerSelection) {
        return 'You win!'
    } else if (computerSelection === playerSelection) {
        return "It's a draw"
    }

}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();



function game() {
    getPlayerChoice()
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

game()
game()
game()

