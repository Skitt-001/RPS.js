const Options = ["rock", "paper", "scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    handleUserChoice("rock");

});

paperBtn.addEventListener("click", () => {
    handleUserChoice("paper");

});

scissorsBtn.addEventListener("click", () => {
    handleUserChoice("scissors");

});

function getComputerChoice(){
    return Options[Math.floor(Math.random() * Options.length)];
}

let handleUserChoice = (choice) => {
    let computertext = document.getElementById("computerchoice");
    let result = document.getElementById("result");
    let ComputerChoice = getComputerChoice();

    if (ComputerChoice === "rock" && choice === "paper"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You won!"
    }
    else if (ComputerChoice === "paper" && choice === "rock"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You lost!!"
    }
    else if (ComputerChoice === "paper" && choice === "scissors"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You won!"
    }
    else if (ComputerChoice === "scissors" && choice === "paper"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You lost!"
    }
    else if (ComputerChoice === "rock" && choice === "scissors"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You lost!"
    }
    else if (ComputerChoice === "scissors" && choice === "rock"){
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "You won!"
    }
    else {
        computertext.innerHTML = ComputerChoice;
        result.innerHTML = "It's a Tie!"
    }

}