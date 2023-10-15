// computerScore = 0
// playerScore = 0
// roundWinner = ''


// function getComputerChoice() {
//     let computerChoice = Math.floor((Math.random() * 3) + 1)

//     if (computerChoice === 1) {
//         computerChoice = 'Rock'
//     } else if (computerChoice === 2) {
//         computerChoice = 'Paper'
//     } else if (computerChoice === 3) {
//         computerChoice = 'Scissors'
//     }
    
//     return computerChoice
// }

// console.log(getComputerChoice())

// function getPlayerChoice() {
//     let playerChoice = prompt("Please make a selection.", "rock, paper, scissors").toLowerCase();
//     return playerChoice
//     // if (playerChoice == null || playerChoice == "") {
//     // alert("Please Try again, refresh the page.");
//     // } else {
//     //     if (playerChoice === 'rock') {
//     //         return 'rock'
//     //     } else if (playerChoice === 'paper'){
//     //         return 'paper'
//     //     } else if (playerChoice === 'scissors'){
//     //         return 'scissors'
//     //     } else {
//     //         alert ('Please Try again, refresh the page.')
//     //     }     
//     // }
// }
// console.log(getPlayerChoice());d

// function updateScore() {
//     if (roundWinner = 'player') {
//         console.log(`You win! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     }

//     if (roundWinner = 'computer') {
//         console.log(`You lose! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     }

//     if (roundWinner = 'tie') {
//         console.log(`Tied! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     }
// }

// const playerSelection = '';
// const computerSelection = getComputerChoice();

// function playRound(playerSelection, computerSelection) {
    
//     if (playerSelection === computerSelection){
//         roundWinner = 'tie'
//     }
//     if (
//     (computerSelection === 'rock' && playerSelection === 'scissors') ||
//     (computerSelection === 'paper' && playerSelection === 'rock') ||
//     (computerSelection === 'scissors' && playerSelection === 'paper')){
//         roundWinner = 'computer'
//         computerScore++
//     }
//     if (
//     (playerSelection === 'rock' && computerSelection === 'scissors') ||
//     (playerSelection === 'paper' && computerSelection === 'rock') ||
//     (playerSelection === 'scissors' && computerSelection === 'paper')){
//         roundWinner = 'player'
//         playerScore++
//     }
//     updateScore()
// }





// function game() {
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection, computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
// }
// game()

// // variable for player Score 
// // variable for com Score

// // function randomising com choice 
// //     random
// //     convert number to rock/paper/scissors

// // function playing game: put all the conditions for 
// // the if statement for each scenario when playing

// // basically do the same as above but using strings instead of ints



// function getComputerSelection() {
//     let computerChoice = Math.floor((Math.random() * 3) + 1)

//     if (computerChoice === 1) {
//         computerChoice = 'rock'
//     } else if (computerChoice === 2) {
//         computerChoice = 'paper'
//     } else if (computerChoice === 3) {
//         computerChoice = 'scissors'
//     }
    
//     return computerChoice
// }

// function getPlayerChoice() {
//     const playerChoice = prompt("Please make a selection.", "rock, paper, scissors").toLowerCase();
//     return playerChoice
// }

// function playRound(playerSelection, computerSelection) {


//     if (playerSelection === computerSelection){
//         roundWinner = 'tie'
//     }
//     else if (
//     (computerSelection === 'rock' && playerSelection === 'scissors') ||
//     (computerSelection === 'paper' && playerSelection === 'rock') ||
//     (computerSelection === 'scissors' && playerSelection === 'paper')){
//         roundWinner = 'computer';
//     }
//     else if (
//     (playerSelection === 'rock' && computerSelection === 'scissors') ||
//     (playerSelection === 'paper' && computerSelection === 'rock') ||
//     (playerSelection === 'scissors' && computerSelection === 'paper')){
//         roundWinner = 'player';
//     }
//     updateScore(roundWinner, playerSelection, computerSelection)
// }

// function updateScore() {
//     let computerScore = 0
//     let playerScore = 0
//     let roundWinner = ''

//     if (roundWinner = 'player') {
//         playerScore++;
//         console.log(`You win! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     } else if (roundWinner = 'computer') {
//         computerScore++
//         console.log(`You lose! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     } else if (roundWinner = 'tie') {
//         console.log(`Tied! your current score is: ${playerScore}, computer score is: ${computerScore}`)
//     }
// // console.log(roundWinner)
// // console.log(computerScore)
// // console.log(playerScore)
// }


// // console.log(roundWinner)
// // console.log(computerScore)
// // console.log(playerScore)

// let computerSelection = getComputerSelection()
// let playerSelection = getPlayerChoice()

// console.log(computerSelection)
// console.log(playerSelection)




// function game() {
//     // getComputerSelection();
//     // getPlayerChoice();
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     // console.log(playRound(playerSelection, computerSelection));
// }
// game()

// // while (playerScore <= 5 || computerScore <= 5) {
// //     game()
// // }