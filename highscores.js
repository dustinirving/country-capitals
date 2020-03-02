let listOfHighscores = document.querySelector(".list-group")

let score = document.createElement("li")

let name = prompt("Please Enter your name")

score.textContent = name + " : " + localStorage.getItem("time") * localStorage.getItem("correctAnswers")

listOfHighscores.appendChild(score)