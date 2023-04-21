const getComputerChoice = () => {
    let  choicesArray = [
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