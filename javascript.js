const containerButtons = document.querySelector("#containerButtons");
const containerScores = document.querySelector("#containerScores");
const containerComments = document.querySelector("#containerComments");
const scoreHuman = containerScores.querySelector("#scoreHuman");
const scoreComputer = containerScores.querySelector("#scoreComputer");
const gameMessage = containerComments.querySelector("#gameMessage");
let humanScore = 0
let computerScore = 0
let hand = ["Rock", "Paper", "Scissors"]
let buttons = document.querySelectorAll("button");

function getComputerChoice() {
    var computerChoice = Math.random() * 10 % 3;
    return computerChoice.toString()[0];
}

function buttonPressed() {
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            if (humanScore == 5 || computerScore == 5) {
                reset();
            } else {
                let buttonPressed = event.target.textContent;
                humanSelection = hand.indexOf(buttonPressed);
                console.log(buttonPressed);
                if (buttonPressed !== "Reset") {
                    playRound();
                } else {
                    reset();
                }
            };
        })
    })
}
function playRound() {

    var computerSelection = getComputerChoice()

    if (humanSelection - computerSelection == -2 || humanSelection - computerSelection == 1) {
        humanScore = humanScore + 1
        gameMessage.textContent = "Un punto para ti Crack!";
    } else if (humanSelection - computerSelection == 2 || humanSelection - computerSelection == -1) {
        computerScore = computerScore + 1
        gameMessage.textContent = "Te va a ganar una máquina Manco!";
    } else if (humanSelection == computerSelection) {
        gameMessage.textContent = "Empate... Prueba otra vez... ";
    }
    if (humanScore == 5 || computerScore == 5) {
        gameMessage.textContent = "Se acabó la partida... ";
        document.documentElement.style.filter = "invert(1)";

    }

    scoreHuman.textContent = humanScore + "\nMi puntuación";
    containerScores.appendChild(scoreHuman);
    scoreComputer.textContent = computerScore + "\nEnemigo";
    containerScores.appendChild(scoreComputer);
    containerComments.append(gameMessage);
}

function reset() {
    location.reload();
}

buttonPressed();