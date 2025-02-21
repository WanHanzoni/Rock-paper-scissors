function getComputerChoice() {
    var computerChoice = Math.random() * 10 % 3;

    if (computerChoice <= 1) {
        computerChoice = "rock"
    }
    if (computerChoice <= 2) {
        computerChoice = "paper"
    }
    if (computerChoice <= 3) {
        computerChoice = "scissors"
    }
    return computerChoice;
}


function getHumanChoice() {
    var humanChoice = prompt().toLocaleLowerCase();
    return humanChoice;
}


let humanScore = 0
let computerScore = 0


function playRound() {
    var humanSelection = getHumanChoice()
    var computerSelection = getComputerChoice()

    console.log("Human plays: " + humanSelection);
    console.log("Computer plays: " + computerSelection);

    if (computerSelection == humanSelection) {
        // playRound(humanSelection, computerSelection);
        alert("Empate");
        playRound();
    }

    if (computerSelection == "scissors" && humanSelection == "rock") {
        humanScore = humanScore + 1;
        alert("Un punto para ti Crack! " + humanScore);
        playRound();
    }
}

playRound();


