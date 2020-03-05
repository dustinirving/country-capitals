let listOfHighscores = document.querySelector(".list-group")

let highScores = JSON.parse(localStorage.getItem("highscores")) || []


listOfHighscores.innerHTML = highScores.map(score => {
    return (`<li class="high-score">${score.name}-${score.score}</li>`)
}).join('')

let playAgain = document.querySelector("#play-again")

playAgain.addEventListener("click", function() {
    window.location.href = "index.html"
})