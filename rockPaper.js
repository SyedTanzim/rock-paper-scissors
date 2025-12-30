function getComputerChoice() {
    let num = parseInt(Math.random() * 3);

    if (num == 0) {
        return 'rock';
    }
    else if (num == 1) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function getHumanChoice() {
    return prompt('Enter Rock, Paper or Scissor!');
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice){
            console.log('round draw');
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore++;
            console.log('computer won the round');
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissor') {
            computerScore++;
            console.log('computer won the round');
        }
        else if (humanChoice == 'scissor' && computerChoice == 'rock') {
            computerScore++;
            console.log('computer won the round');
        }
        else {
            humanScore++;
            console.log('you won the round');
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log('human selection = ', humanSelection);
        console.log('computer selection = ', computerSelection);
        
        playRound(humanSelection, computerSelection);
    }

    console.log('computerScore = ', computerScore, 'human score = ', humanScore);  

    if(humanScore == computerScore){
        console.log('Game draw')
    }
    else if (humanScore > computerScore) {
        console.log('You won the game');
    }
    else {
        console.log('computer won the game');
    }
}

playGame();