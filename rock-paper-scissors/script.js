const getComputerChoice = () => {
    const  choicesArray = [
        "rock",
        "paper",
        "scissor"
    ];

    const computerChoice = Math.floor(Math.random() * choicesArray.length);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

const playRound = (playerSelection, computerSelection) => {
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice == computerSelection) {
        return "It's a draw!";
    }

    if (playerChoice == "rock") {
        return computerSelection == "scissor" ? "You win! Rock beats Scissor" : "You lose! Paper beats Rock";
    } else if (playerChoice == "paper") {
        return computerSelection == "rock" ? "You win! Paper beats Rock" : "You lose! Scissor beats Paper";
    } else {
        return computerSelection == "paper" ? "You win! Scissor beats paper" : "You lose! Rock beats Scissor";
    } 
}

const playerSelection = "Rock";

console.log(playRound(playerSelection, getComputerChoice()));