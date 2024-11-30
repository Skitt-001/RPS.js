const Options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return Options[Math.floor(Math.random() * Options.length)];
}
let times = Number(prompt("How many times do you want to play the game?"));

let score = 0;
let computerscore = 0;

for (let i = 1; i <= times; i++){
    let getUserChoice = prompt("Enter rock, paper or scissors.").toLowerCase();
    let ComputerChoice = getComputerChoice();

    if (ComputerChoice === "rock" && getUserChoice === "paper"){
        console.log("You won!");
        console.log(`The computer chose ${ComputerChoice}!`);
        score += 1;
    }
    else if (ComputerChoice === "paper" && getUserChoice === "rock"){
        console.log("You lost!");
        console.log(`The computer chose ${ComputerChoice}!`);
        computerscore += 1;
    }
    else if (ComputerChoice === "paper" && getUserChoice === "scissors"){
        console.log("You won!");
        console.log(`The computer chose ${ComputerChoice}!`);
        score += 1;
    }
    else if (ComputerChoice === "scissors" && getUserChoice === "paper"){
        console.log("You lost!");
        console.log(`The computer chose ${ComputerChoice}!`);
        computerscore += 1;
    }
    else if (ComputerChoice === "rock" && getUserChoice === "scissors"){
        console.log("You lost!")
        console.log(`The computer chose ${ComputerChoice}!`)
        computerscore += 1;
    }
    else if (ComputerChoice === "scissors" && getUserChoice === "rock"){
        console.log("You won!");
        console.log(`The computer chose ${ComputerChoice}!`);
        score += 1;
    }
    else {
        console.log("Tie!");
        console.log(`The computer also chose ${ComputerChoice}!`);
    }
} 

if (score > computerscore){
    console.log(`Congrats! You won! Your score is ${score} out of ${times}!`);
}
else if (score < computerscore){
    console.log(`Sorry, You lost! Your score is ${score} out of ${times}!`);
    console.log(`Computers score is ${computerscore} out of ${times}!)`);
}
else {
    console.log(`It's a tie! Your score is ${score} out of ${times}!`);
    console.log(`Computers score is ${computerscore} out of ${times}!`);
}