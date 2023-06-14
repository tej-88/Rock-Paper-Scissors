function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(randomNumber) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('Round Tied! You both selected Rock');
            return 0;
        }
        else if (computerSelection == 'paper') {
            console.log('You Lose! Paper beats Rock');
            return -1;
        }
        else {
            console.log('You Win! Rock beats Scissors.');
            return 1;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You Win! Paper beats Rock');
            return 1;
        }
        else if (computerSelection == 'paper') {
            console.log('Round Tied! You both selected Paper');
            return 0;
        }
        else {
            console.log('You Lose! Scissors beats Paper.');
            return -1;
        }
    }
    else {
        if (computerSelection == 'rock') {
            console.log('You Lose! Rock beats Scissors.');
            return -1;
        }
        else if (computerSelection == 'paper') {
            console.log('You Win! Scissors beats Paper.');
            return 1;
        }
        else {
            console.log('Round Tied! You both selected Scissors');
            return 0;
        }
    }
}

function game() {
    let userChoice;
    let computerChoice;
    let roundResult;
    let userScore = 0;
    let computerScore = 0;

    console.log('Round 1');
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    roundResult = playRound(userChoice, computerChoice);
    userScore += (roundResult == 1) ? 1 : 0;
    computerScore += (roundResult == -1) ? 1: 0;

    console.log('Round 2');
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    roundResult = playRound(userChoice, computerChoice);
    userScore += (roundResult == 1) ? 1 : 0;
    computerScore += (roundResult == -1) ? 1: 0;

    console.log('Round 3');
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    roundResult = playRound(userChoice, computerChoice);
    userScore += (roundResult == 1) ? 1 : 0;
    computerScore += (roundResult == -1) ? 1: 0;

    console.log('Round 4');
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    roundResult = playRound(userChoice, computerChoice);
    userScore += (roundResult == 1) ? 1 : 0;
    computerScore += (roundResult == -1) ? 1: 0;

    console.log('Round 5');
    userChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    roundResult = playRound(userChoice, computerChoice);
    userScore += (roundResult == 1) ? 1 : 0;
    computerScore += (roundResult == -1) ? 1: 0;

    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (userScore > computerScore) {
        return 'You have Won the Game!';
    }
    else if (computerScore < userScore) {
        return 'The Computer has Won the Game!'
    }
    else {
        return 'The Game has Tied!'
    }
}