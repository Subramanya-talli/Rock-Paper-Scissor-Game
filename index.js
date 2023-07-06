let choice = ["Rock", "Paper", "Scissor"]
let rockEl = document.getElementById("rock-el")
let userEl = document.getElementById("user-el")
let computerEl = document.getElementById("computer-el")
let resultEl = document.getElementById("result-el")
let userChoice
let computerChoice


function rock() {
    userEl.textContent = "Your choice : " + choice[0]
    userChoice = choice[0]
    renderGame()
}

function paper() {
    userEl.textContent = "Your choice : " + choice[1]
    userChoice = choice[1]
    renderGame()

}

function scissor() {
    userEl.textContent = "Your choice : " + choice[2];
    userChoice = choice[2]
    renderGame()
}



function renderGame() {
    let randomNumber = Math.floor(Math.random() * 3);
    computerEl.textContent = "Computer choice : " + choice[randomNumber]
    computerChoice = choice[randomNumber]
    result()
}


function result() {

    if (userChoice === computerChoice) {
        resultEl.textContent = "Result : " + "Its a draw!"
    }

    else if (userChoice == "Rock" && computerChoice == "Scissor" ||
        userChoice == "Scissor" && computerChoice == "Paper" || userChoice == "Paper" && computerChoice == "Rock" ) 
    {
        resultEl.textContent = "Result : " + "You won!"
    }
    else
    {
        resultEl.textContent = "Result : " + "You lose!"
    }
}
