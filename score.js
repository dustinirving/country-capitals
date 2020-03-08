// Select the timer element and set the time on the dom to the time left in the quiz

let timer = document.querySelector("#timer")
timer.textContent = "Time: " + localStorage.getItem("time")

// Declare a variable for the final score element
let scoreMessage = document.querySelector("#final-score")

// Display the final score based on the remaining time from the localstorage
timer.textContent = "Time: " + localStorage.getItem("time")
scoreMessage.textContent = "Your final score is " + localStorage.getItem("time") + "."

// Declare a variable for the play again element
let playAgain = document.querySelector("#play-again")

// Redirect to the homepage when you click on the play again butt
playAgain.addEventListener("click", function() {
    window.location.href = "index.html"
})

// Declare a variable to select the submit button
let submit = document.querySelector("#submit")

// Declare a variable for highscores
// Get the current highscores from local storage. If it doesn't exist then set it to an empty array
let highscores = JSON.parse(localStorage.getItem("highscores")) || []

// Add an event listener for the submit button 
submit.addEventListener("click", function() {
    // Declare an object with properties score and name
    let score = {
            score: localStorage.getItem("time"),
            name: document.querySelector("#name").value
        }
        // Push the score object into the highscores array
    highscores.push(score)
        // Sort the highest to lowest
    highscores.sort(function(a, b) {
            return b.score - a.score
        })
        // Get rid of any scores  not in the top 5
    highscores.splice(5)
        // Store the array of objects as a string in highscores
    localStorage.setItem("highscores", JSON.stringify(highscores))
        // Redirect to the highscores page
    window.location.href = "highscores.html"
})