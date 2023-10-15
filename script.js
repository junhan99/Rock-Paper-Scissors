const options = ['rock', 'paper', 'scissors'];

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

function getPlayerChoice() {
    // using a while loop to keep prompting and looping if the input is no correct
    let validatedInput = false;
    while (validatedInput == false){
        const playerChoice = prompt("Please make a selection.", "rock, paper, scissors");
        if (playerChoice == null || playerChoice == "") {
            alert("Please Try again.");
            // continue loop
            continue;
        } 
        
        playerChoiceLower = playerChoice.toLowerCase()
        if (options.includes(playerChoiceLower)) {
            validatedInput = true;
            // have to return playerChoice or the function will be undefined
            return playerChoiceLower;

        } 
        else {
            alert("Please Try again.");
        }
    }
   

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
    let playerScore = 0;
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == 'player'){
            playerScore++;
            console.log(`Player score: ${playerScore}, computer score: ${computerScore}`)    
        }
        else if (checkWinner(playerSelection, computerSelection) == 'computer') {
            computerScore++;
            console.log(`Player score: ${playerScore}, computer score: ${computerScore}`)
        }
        else {
            console.log(`Player score: ${playerScore}, computer score: ${computerScore}`)
        }
    }
    console.log('Game Over!')
    if (playerScore > computerScore){
        console.log(`The player wins! score: ${playerScore}`)
    }
    else if (computerScore > playerScore){
        console.log(`The computer wins! score: ${playerScore}`)
    }
    else {
        console.log(`It's a tie! score: ${playerScore}`)
    }
}

game()