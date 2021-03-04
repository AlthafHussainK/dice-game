// variables for the game state

let player1Score = 0
let player2Score = 0
let player1Turn = true

// variables to store references to the necessary DOM nodes

const message = document.getElementById('message')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

// generate random number between 1 and 6


rollBtn.addEventListener('click', randomNumber)

function randomNumber(){
  if (player1Turn){
    message.textContent = 'Player 2 Turn'
    let number = Math.floor(Math.random() * 6) + 1
    player1Dice.textContent = number
    player1Score += number
    if (player1Score >= 20){
      message.textContent = "Player 1 Won! 🥳"
      rollBtn.style.display = 'none'
      resetBtn.style.display = 'block'
    }
    player1Scoreboard.textContent = player1Score
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
    player1Turn = false
  } else {
    message.textContent = "Player 1 Turn"
    let number = Math.floor(Math.random() * 6) + 1
    player2Dice.textContent = number
    player2Score += number
    if (player2Score >= 20){
      message.textContent = "Player 2 Won! 🎉"
      rollBtn.style.display = 'none'
      resetBtn.style.display = 'block'
    }
    player2Scoreboard.textContent = player2Score
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    player1Turn = true
  }
}

resetBtn.addEventListener('click', reset)

function reset(){
  message.textContent = 'Player 1 Turn'
  player1Turn = true
  player1Score = 0
  player2Score = 0
  player2Dice.classList.remove('active')
  player1Dice.classList.add('active')
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  player1Dice.textContent = '-'
  player2Dice.textContent = '-'
  rollBtn.style.display = 'block'
  resetBtn.style.display = 'none'
}