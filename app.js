const startBtn = document.getElementById("start-game-btn")
const restartBtn = document.getElementById("restart-game-btn")
const popup = document.getElementById("popup")
const stetusPara = document.getElementById("stetus-para")
const stetusHead = document.getElementById("stetus-head")
const endPara = document.getElementById("end-para")
const endHead = document.getElementById("end-head")
const bottomButtons = document.getElementById("bottom-buttons")
// popup Types end and start
const startPopup = document.getElementById("start-popup")
const stetusPopup = document.getElementById("stetus-popup")
const endPopup = document.getElementById("end-popup")
//win and Lose Text for Stetus popup
function winF() {
    stetusHead.textContent = "You Win the Match 🔥."
    stetusPara.innerHTML = winPara[selectWinPara]
}
function loseF() {
    const loseHead = stetusHead.textContent = "You Lose the match 💀."
    stetusPara.innerHTML = losePara[selectLosePara]
}
//add Points for computer and User
function addUserPoints(){
    UserPoints += 1
}
function addComputerPoints(){
    computerPoints += 1
}
// Prasses for win of Lose
const winPara = ['Lets Go you Win', 'Nice shot', 'Wll done']
const losePara = ["Football is a simple game.", 'Try again Bro', 'Think double']
let selectWinPara
let selectLosePara
// Image section
const humanSelectionImg = document.getElementById("human-area")
const computerSelectionImg = document.getElementById("computer-area")
// player Buttons
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const btns = [rockBtn, paperBtn, scissorsBtn]
const items = ["rock", "paper", "scissors"]
// Points
const humanPointEl = document.getElementById("human-point")
const computerPointEl = document.getElementById("computer-point")
let computerPoints = 0
let UserPoints = 0
// selections for user and computer
let userSelectionNum   //Grab data from Array
let userSelection
let computerSelection
// game Round
let gameRounds = 0
let drawrounds = 0
// start game button function
startBtn.addEventListener("click", function() {
    bottomButtons.classList.remove('hide')
    startPopup.style = "display: none;"
    for (let i = 0; i < 3; i++) {
        btns[i].addEventListener("click", function startGame() {
            gameRounds += 1
            if (gameRounds - drawrounds < 5) {
                let userSelectionNum = parseInt(this.getAttribute("data-value"))
                userSelection = items[userSelectionNum]
                computerSelectionF()
                gameResult()
                bottomButtons.classList.remove('hide')
            } else {
                gameResult()
                restartGame()
                endPopup.style = "display: block;"
            }
        })
    }
})
//computer selection function
function computerSelectionF() {
    let i = Math.floor(Math.random() * 3)
    computerSelection = items[i]
    console.log(computerSelection)
}
// Game restart Button function
function restartGame() {
    bottomButtons.classList.add('hide')
    restartBtn.addEventListener('click', function () {
        endPopup.style = "display: none;"
        gameRounds = 0
        drawrounds = 0
        computerPoints = 0
        UserPoints = 0
        humanPointEl.innerText = 0
        computerPointEl.innerText = 0
        computerSelectionImg.innerHTML = `<img src = "assets/ai.png">`
        humanSelectionImg.innerHTML = `<img src="assets/man.png">`
        bottomButtons.classList.remove('hide')
    })
}
// stetus Popup Showing and Hiding

function stetusPopupShow() {
    stetusPopup.style = "display: block;"

    setTimeout(stetusPopupHide, 1100)

    function stetusPopupHide() {
        stetusPopup.style = "display: none;"
    }
    computerSelectionImg.innerHTML = `<img src = "assets/${computerSelection}.png">`
    humanSelectionImg.innerHTML = `<img src="assets/${userSelection}.png">`

}
// gameResult genarate
function gameResult() {
    selectWinPara = Math.floor(Math.random() * 3)
    selectLosePara = Math.floor(Math.random() * 3)
    if (computerSelection === userSelection) {
        stetusHead.textContent = "Match Draw"
        stetusPara.innerHTML = "Try again"
        drawrounds += 1
        stetusPopupShow()
    }
    if (computerSelection === 'rock' && userSelection === 'scissors') {
        addComputerPoints()
        loseF()   //send text to stetus Popup
        stetusPopupShow()
    }
    if (computerSelection === 'rock' && userSelection === 'paper') {
        addUserPoints()
        winF()   //send text to stetus Popup
        stetusPopupShow()

    } if (computerSelection === 'paper' && userSelection === 'scissors') {
        addUserPoints()
        winF()
        stetusPopupShow()

    } if (computerSelection === 'paper' && userSelection === 'rock') {
        addComputerPoints()
        loseF()
        stetusPopupShow()

    } if (computerSelection === 'scissors' && userSelection === 'paper') {
        addComputerPoints()
        loseF()
        stetusPopupShow()

    } if (computerSelection === 'scissors' && userSelection === 'rock') {
        addUserPoints()
        winF()
        stetusPopupShow()
    }
    // add end Poppup details
    if (computerPoints > UserPoints) {
        if (computerPoints === 5) {
            endHead.textContent = "You Lose the Match"
            endPara.textContent = `Nice Try But You Lose 🙂. This is the beginning computer beats the humans 😂 You have to play this game again.Try to get a one Point if you can.`
        }
        else {
            endHead.textContent = "You Lose the Match"
            endPara.textContent = `Nice Try But You Lose 🙂. This is the beginning computer beats the humans 😂 If you are like to play again click the button bellow`
        }
    }
    else {
        if (UserPoints === 5) {
            endHead.textContent = "You Win the Match"
            endPara.textContent = `Yahoo! You kick the computer ass 😋.This is what I want High 5 Score. Try again to beat the computer ass. 🤖(I,m Waiting)`
        }
        else {
            endHead.textContent = "You Win the Match"
            endPara.textContent = `Yahoo! You kick the computer ass 😋. Try again to beat the computer ass. 🤖(I,m Waiting)`
        }
    }
    humanPointEl.innerText = UserPoints
    computerPointEl.innerText = computerPoints
}


