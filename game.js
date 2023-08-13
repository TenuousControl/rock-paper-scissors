function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice(choice){
    //return rock, paper or scissors randomly
    let result = getRandInt(0, 2);
    if (result === 0){
        choice = "rock";
    }
    else if (result === 1){
        choice = "paper";
    }
    else if (result === 2){
        choice = "scissors";
    }
    return choice;
}


function playRound(playerSelection, computerSelection){
    //return a string to determine winner
    if (playerSelection === computerSelection){
        return result = "Draw!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock")){
        return result = "You win!";
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")
    || (playerSelection === "rock" && computerSelection === "paper")){
        return result = "You lose!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));