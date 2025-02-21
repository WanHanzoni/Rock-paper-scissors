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

if (computerScore == 5 || humanScore == 5) {

}

function playRound() {

    var humanSelection = getHumanChoice()
    var computerSelection = getComputerChoice()

    console.log("Human plays: " + humanSelection);
    console.log("Computer plays: " + computerSelection);

    if (computerSelection == humanSelection) {
        // playRound(humanSelection, computerSelection);
        alert("Empate");
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }

    if (computerSelection == "scissors" && humanSelection == "rock") {
        humanScore = humanScore + 1;
        alert("Un punto para ti Crack! " + humanScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }
    if (computerSelection == "rock" && humanSelection == "paper") {
        humanScore = humanScore + 1;
        alert("Un punto para ti Crack! " + humanScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }
    if (computerSelection == "paper" && humanSelection == "scissors") {
        humanScore = humanScore + 1;
        alert("Un punto para ti Crack! " + humanScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }
    if (computerSelection == "rock" && humanSelection == "scissors") {
        computerScore = computerScore + 1;
        alert("Te va a ganar una máquina Manco! " + computerScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }
    if (computerSelection == "paper" && humanSelection == "rock") {
        computerScore = computerScore + 1;
        alert("Te va a ganar una máquina Manco! " + computerScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }
    if (computerSelection == "scissors" && humanSelection == "paper") {
        computerScore = computerScore + 1;
        alert("Te va a ganar una máquina Manco! " + computerScore);
        if (humanScore == 5 || computerScore == 5) {
            alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\n Crack: " + humanScore);
        }
        else playRound();
    }

}

playRound();


