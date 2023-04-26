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
    
    
    if (playerChoice == computerSelection)
    return "draw";
        
    if (playerChoice == "rock") {
        return computerSelection == "scissor" ? "win" : "lose";
    } else if (playerChoice == "paper") {
        return computerSelection == "rock" ? "win" : "lose";
    } else {
        return computerSelection == "paper" ? "win" : "lose";
    }
};


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
score.textContent = `${playerScore} x ${computerScore}`
const result = document.querySelector(".result");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.id;
        const pcChoice = getComputerChoice();
        const res = playRound(choice, pcChoice);
        if (res == "win") {
            result.textContent = `You win! ${choice} beats ${pcChoice}`;
            score.textContent = `${++playerScore} x ${computerScore}`;
        } else if (res == "lose") {
            result.textContent = `You lose! ${pcChoice} beats ${choice}`;
            score.textContent = `${playerScore} x ${++computerScore}`;
        } else {
            result.textContent = `It's a draw!`;
        }
    })
})