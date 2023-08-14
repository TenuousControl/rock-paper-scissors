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

        result = `You chose ${playerSelection}, the computer chose ${computerSelection} Draw!`;

    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock")){

        result = `You chose ${playerSelection}, the computer chose ${computerSelection} You win!`;

    }
    else if ((playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")
    || (playerSelection === "rock" && computerSelection === "paper")){

        result = `You chose ${playerSelection}, the computer chose ${computerSelection} You lose!`;

    }
    console.log(result)
    return result
}

function game(){
    let playerSelection;
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice:").toLowerCase();
        playRound(playerSelection, getComputerChoice());
    }
}

game()