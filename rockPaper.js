let buttons = document.querySelectorAll('button');
let humanScore = 0;
let computerScore = 0;
let totalGames = 0;
let gameResult = '';

const result = document.querySelector('.result');

const round = document.createElement('div');
round.classList.add('round');
round.innerText = 'Round = 0';
result.appendChild(round);

const score = document.createElement('div');
score.classList.add('score');
score.innerText = 'Your Score = 0 Computer Score = 0';
result.appendChild(score);

const selection = document.createElement('div');
selection.classList.add('selection');
selection.innerText = 'You = Null Computer = Null'
result.appendChild(selection);

const roundResult = document.createElement('div');
roundResult.classList.add('roundResult');
result.appendChild(roundResult);


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        gameResult = 'Round draw';
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        gameResult = 'Computer won the round';
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore++;
        gameResult = 'Computer won the round';
    }
    else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore++;
        gameResult = 'Computer won the round';
    }
    else {
        humanScore++;
        gameResult = 'You won the round';
    }
};

function gameReset() {
    computerSelection = '';
    totalGames = 0;
    humanScore = 0;
    computerScore = 0;
    gameResult = '';

    round.innerText = 'Round = 0';
    score.innerText = 'Player Score = 0 Computer Score = 0';
    selection.innerText = 'You = Null Computer = Null'
    roundResult.innerText = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        totalGames++;

        playRound(button.id, computerSelection);

        round.innerText = `Round = ${totalGames}`;
        score.innerText = `Your Score = ${humanScore} Computer Score = ${computerScore}`;
        selection.innerText = `You = ${button.id} Computer = ${computerSelection}`;
        roundResult.innerText = gameResult;
        
        if (totalGames == 5) {
            let winner = '';
            if (humanScore == computerScore) {
                winner = 'Game draw';

            }
            else if (humanScore > computerScore) {
                winner = 'You Won';
            }
            else {
                winner = 'Computer won';
            }

            alert(winner);
            gameReset();
        }
    });
});
