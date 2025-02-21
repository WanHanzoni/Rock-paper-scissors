function getComputerChoice() {
    return Math.random();
}


function getHumanChoice() {
    return prompt().toLocaleLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {

    computerChoice = computerSelection * 10 % 3

    if (computerChoice <= 1) {
        computerChoice = "rock"
    }
    if (computerChoice <= 2) {
        computerChoice = "paper"
    }
    if (computerChoice <= 3) {
        computerChoice = "scissors"
    }

    console.log("Human plays: " + humanSelection)
    console.log("Computer plays: " + computerChoice)

    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore + 1;
        // playRound();
    }
}

playRound(humanSelection, computerSelection)


