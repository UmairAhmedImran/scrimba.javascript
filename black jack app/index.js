// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 5
let secondCard = 8
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard

// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out

function save() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Black Jack 🥳"
        hasBlackJack = true
    } else {
        message = "You are out of the game 😥"
        isAlive = false
    }
    console.log(message)
}