//Questions and answers stored in objects

let question1 = {
    question: 'What is the capital of Canada?',
    answer1: 'Toronto',
    answer2: 'Vancouver',
    answer3: 'Ottawa',
    answer4: 'Montreal',
}

let question2 = {
    question: 'What is the capital of South Korea?',
    answer1: 'Seoul',
    answer2: 'Daegu',
    answer3: 'Busan',
    answer4: 'Tongyeong',
}
let question3 = {
    question: 'What is the capital of Egypt?',
    answer1: 'Aswan',
    answer2: 'Luxor',
    answer3: 'Alexandria',
    answer4: 'Cairo',
}
let question4 = {
    question: 'What is the capital of Vietnam?',
    answer1: 'Ho Chi Minh',
    answer2: 'Hanoi',
    answer3: 'Nha Trang',
    answer4: 'Da Nang',
}
let question5 = {
    question: 'What is the capital of Italy?',
    answer1: 'Rome',
    answer2: 'Milan',
    answer3: 'Naples',
    answer4: 'Turin',
}

//Questions stored in an array

let questions = [question1, question2, question3, question4, question5]


// Updating HTML
let firstQuestion = document.querySelector("#question")
let firstAnswer = document.querySelector("#answer1")
let secondAnswer = document.querySelector("#answer2")
let thirdAnswer = document.querySelector("#answer3")
let fourthAnswer = document.querySelector("#answer4")
let fifthAnswer = document.querySelector("#answer5")

firstQuestion.textContent = question1.question
firstAnswer.textContent = question1.answer1
secondAnswer.textContent = question1.answer2
thirdAnswer.textContent = question1.answer3
fourthAnswer.textContent = question1.answer4
fifthAnswer.textContent = question1.answer5