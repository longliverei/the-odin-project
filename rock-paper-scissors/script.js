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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.id;
        console.log(playRound(choice, getComputerChoice()));
    });
});

//const game = () => {
//    let playerScore = 0, computerScore = 0;
//    let winner = "Draw game";
//
//    for (let i = 0; i < 5; i++) {
//        let playerChoice = prompt("Jan, ken, po!");
//        let computerChoice = getComputerChoice();
//        const res = playRound(playerChoice, computerChoice);
//        if (res == "win") {
//            console.log("You win this round! " + playerChoice + " beats " + computerChoice + " Score: " + ++playerScore + " x " + computerScore);
//        } else if (res == "lose") {
//            console.log("You lose this round! " + computerChoice + " beats " + playerChoice + " Score: " + playerScore + " x " + ++computerScore);
//        } else {
//            console.log("It's a draw :) your choice: " + playerChoice + " Computer choice: " + computerChoice);
//        }
//    }
//
//    if (playerScore == computerScore) {
//        return winner;
//    }
//
//    playerScore > computerScore ? winner = "Player 1" : winner = "Computer";
//    
//    return winner + " wins";
//}

