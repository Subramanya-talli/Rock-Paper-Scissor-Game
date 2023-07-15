const choice = ["Rock", "Paper", "Scissor"]
const buttonsEl = document.getElementById("buttons")
const userEl = document.getElementById("user-el")
const computerEl = document.getElementById("computer-el")
const resultEl = document.getElementById("result-el")
const startGameEl = document.getElementById("startBtn-el")
const instructEl = document.getElementById("instruct-el")
const images = document.getElementById("images")
const resultsInfo = document.getElementById("results-info")
const win = document.getElementById("win-icon")
const lose = document.getElementById("lose-icon")


let userChoice
let computerChoice

startGameEl.addEventListener("click", function()
{
    images.style.display = "none"
    startGameEl.style.display = "none"
    instructEl.style.display = "block"
    buttonsEl.style.display = "block"
    
})



function renderGame() {
    let randomNumber = Math.floor(Math.random() * 3);
    computerEl.textContent = "Computer choice : " + choice[randomNumber]
    computerChoice = choice[randomNumber]
    result()
}


function rock() {
    instructEl.style.display = "none"
    resultsInfo.style.display = "block"
    userEl.textContent = "Your choice : " + choice[0]
    userChoice = choice[0]
    renderGame()
}

function paper() {
    instructEl.style.display = "none"
    resultsInfo.style.display = "block"
    userEl.textContent = "Your choice : " + choice[1] 
    userChoice = choice[0]
    renderGame()

}

function scissor() {
    instructEl.style.display = "none"
    resultsInfo.style.display = "block"
    userEl.textContent = "Your choice : " + choice[2]
    userChoice = choice[0]
    renderGame()
}

function result() {
    
    if (userChoice === computerChoice) {
        resultEl.textContent = "Result : " + "Its a draw!"
    }

    else if (userChoice == "Rock" && computerChoice == "Scissor" ||
        userChoice == "Scissor" && computerChoice == "Paper" || userChoice == "Paper" && computerChoice == "Rock" ) 
    {
        resultEl.innerHTML = "Result : " + "You won" 
        win.style.display = "block"
    }
    else
    {
        resultEl.textContent = "Result : " + "You lose!"
    }
}



