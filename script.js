//Timer
// Declare a variable to select the HTML element to update the timer
let timer = document.querySelector("#timer")

// Declare a variable for amount of time left in quiz
let secondsLeft = 60

// Timer function
function quizTimer() {
    let timerInterval = setInterval(function() {
        // Subtract 1 second every interval
        secondsLeft = secondsLeft - 1
            // Update the local storage to the new time
        localStorage.setItem("time", secondsLeft)
            // Update the text on the HTML page
        timer.textContent = "Time: " + secondsLeft
            // If time reaches 0 you are redirected to a new page
        if (secondsLeft === 0) {
            window.location.href = "score.html"
        }
    }, 1000)
}

// Call the quizTimer function
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


// Selection the HTML elements for the question and answers
let questioN = document.querySelector("#question")
let firstAnswer = document.querySelector("#answer1")
let secondAnswer = document.querySelector("#answer2")
let thirdAnswer = document.querySelector("#answer3")
let fourthAnswer = document.querySelector("#answer4")
let answers = document.querySelector("#answers")


// Question index to update the question in the array
let questionIndex = 0

// When this page is loaded the first question will be displayed on the page
questioN.textContent = questions[questionIndex].question
firstAnswer.textContent = questions[questionIndex].answer1
secondAnswer.textContent = questions[questionIndex].answer2
thirdAnswer.textContent = questions[questionIndex].answer3
fourthAnswer.textContent = questions[questionIndex].answer4

// Declaring a variable to select for the element that will display if they answered the question correctly
let printResult = document.querySelector("#result")

// Click handler function
function handleClick(event) {
    // If they choose the first answer
    if (event.target.matches("#answer1")) {
        // Determining whether or not the answer is correct or not
        if (questions[questionIndex].correctAnswer === 'answerOne') {
            // print correct if it's the correct answer
            printResult.textContent = "Correct!"
                // make a call back function to remove the message after 1 second
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
        } else {
            printResult.textContent = "Incorrect! -10s"
            setTimeout(function() {
                    printResult.textContent = ''
                }, 1000)
                // If the answer is not correct remove time from the timer
            secondsLeft = secondsLeft - 10

        }
        // Repeat for all the other  possible answers

    } else if (event.target.matches("#answer2")) {
        if (questions[questionIndex].correctAnswer === 'answerTwo') {
            printResult.textContent = "Correct!"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
        } else {
            printResult.textContent = "Incorrect! -10s"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
            secondsLeft = secondsLeft - 10
        }

    } else if (event.target.matches("#answer3")) {
        if (questions[questionIndex].correctAnswer === 'answerThree') {
            printResult.textContent = "Correct!"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
        } else {
            printResult.textContent = "Incorrect! -10s"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
            secondsLeft = secondsLeft - 10
        }

    } else if (event.target.matches("#answer4")) {
        if (questions[questionIndex].correctAnswer === 'answerFour') {
            printResult.textContent = "Correct!"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
        } else {
            printResult.textContent = "Incorrect! -10s"
            setTimeout(function() {
                printResult.textContent = ''
            }, 1000)
            secondsLeft = secondsLeft - 10
        }
    }
    // Update the question index for a new question after they pick an answer
    questionIndex += 1
        // Check to see if there are more questions left in the array 
        // If there is another one, then the DOM is updated with that question
    if (questionIndex < questions.length) {
        questioN.textContent = questions[questionIndex].question
        firstAnswer.textContent = questions[questionIndex].answer1
        secondAnswer.textContent = questions[questionIndex].answer2
        thirdAnswer.textContent = questions[questionIndex].answer3
        fourthAnswer.textContent = questions[questionIndex].answer4
            // If secondsLeft becomes negative because of the time penalty, then it is change to 0
    } else {
        if (secondsLeft < 0) {
            secondsLeft = 0
        }
        // The time key is updated with the new value after the penalty
        localStorage.setItem("time", secondsLeft)
            // Redirected to the score submission page
        window.location.href = "score.html"
    }
}

// Event listener for click event
answers.addEventListener("click", handleClick)