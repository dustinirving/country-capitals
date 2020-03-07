//Timer

let timer = document.querySelector("#timer")

let secondsLeft = 60



function quizTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft = secondsLeft - 1
        localStorage.setItem("time", secondsLeft)
        timer.textContent = "Time: " + secondsLeft
        if (secondsLeft === 0) {
            window.location.href = "score.html"
        }
    }, 1000)
}


quizTimer()
    //Questions and answers stored in objects

let question1 = {
    question: '1.  What is the capital of Canada?',
    answer1: 'Toronto',
    answer2: 'Vancouver',
    answer3: 'Ottawa',
    answer4: 'Montreal',
    correctAnswer: 'answerThree',
}

let question2 = {
    question: '2.  What is the capital of South Korea?',
    answer1: 'Seoul',
    answer2: 'Daegu',
    answer3: 'Busan',
    answer4: 'Tongyeong',
    correctAnswer: 'answerOne',
}
let question3 = {
    question: '3.  What is the capital of Egypt?',
    answer1: 'Aswan',
    answer2: 'Luxor',
    answer3: 'Alexandria',
    answer4: 'Cairo',
    correctAnswer: 'answerFour',
}
let question4 = {
    question: '4.  What is the capital of Vietnam?',
    answer1: 'Ho Chi Minh',
    answer2: 'Hanoi',
    answer3: 'Nha Trang',
    answer4: 'Da Nang',
    correctAnswer: 'answerTwo',
}
let question5 = {
    question: '5.  What is the capital of Italy?',
    answer1: 'Rome',
    answer2: 'Milan',
    answer3: 'Naples',
    answer4: 'Turin',
    correctAnswer: 'answerOne',
}

//Questions stored in an array

let questions = [question1, question2, question3, question4, question5]


// Updating HTML
let questioN = document.querySelector("#question")
let firstAnswer = document.querySelector("#answer1")
let secondAnswer = document.querySelector("#answer2")
let thirdAnswer = document.querySelector("#answer3")
let fourthAnswer = document.querySelector("#answer4")
let answers = document.querySelector("#answers")

let j = 0

questioN.textContent = questions[0].question
firstAnswer.textContent = questions[0].answer1
secondAnswer.textContent = questions[0].answer2
thirdAnswer.textContent = questions[0].answer3
fourthAnswer.textContent = questions[0].answer4

let printResult = document.querySelector("#result")


function handleClick(event) {
    if (event.target.matches("#answer1")) {
        if (questions[j].correctAnswer === 'answerOne') {
            printResult.textContent = "Correct!"
        } else {
            printResult.textContent = "Incorrect! -10s"
            secondsLeft = secondsLeft - 10

        }

    } else if (event.target.matches("#answer2")) {
        if (questions[j].correctAnswer === 'answerTwo') {
            printResult.textContent = "Correct!"
        } else {
            printResult.textContent = "Incorrect! -10s"
            secondsLeft = secondsLeft - 10
        }

    } else if (event.target.matches("#answer3")) {
        if (questions[j].correctAnswer === 'answerThree') {
            printResult.textContent = "Correct!"
        } else {
            printResult.textContent = "Incorrect! -10s"
            secondsLeft = secondsLeft - 10
        }

    } else if (event.target.matches("#answer4")) {
        if (questions[j].correctAnswer === 'answerFour') {
            printResult.textContent = "Correct!"
        } else {
            printResult.textContent = "Incorrect! -10s"
            secondsLeft = secondsLeft - 10
        }
    }

    j += 1

    if (j < questions.length) {
        questioN.textContent = questions[j].question
        firstAnswer.textContent = questions[j].answer1
        secondAnswer.textContent = questions[j].answer2
        thirdAnswer.textContent = questions[j].answer3
        fourthAnswer.textContent = questions[j].answer4
    } else {
        localStorage.setItem("time", secondsLeft)
        window.location.href = "score.html"
    }
}


answers.addEventListener("click", handleClick)