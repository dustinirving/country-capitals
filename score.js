let scoreMessage = document.querySelector("#final-score")

let playAgain = document.querySelector("#play-again")

playAgain.addEventListener("click", function() {
    window.location.href = "index.html"
})


scoreMessage.textContent = "Your final score is " + localStorage.getItem("time") * localStorage.getItem("correctAnswers") + "."

let button = document.querySelector("#button")

let highscores = JSON.parse(localStorage.getItem("highscores")) || []
let maxHighscores = 5


button.addEventListener("click", function() {
    let score = {
        score: localStorage.getItem("time") * localStorage.getItem("correctAnswers"),
        name: document.querySelector("#name").value
    }
    highscores.push(score)
    highscores.sort(function(a, b) {
        return b.score - a.score
    })
    highscores.splice(5)
    localStorage.setItem("highscores", JSON.stringify(highscores))
    window.location.href = "highscores.html"
})