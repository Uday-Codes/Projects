const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice)
    {
        result = "It is a draw";
    }
    else
    {
        switch(playerChoice)
        {
            case "rock":
                result = (computerChoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win" : "You lose";        
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}