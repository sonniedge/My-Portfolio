const questions = [
    {
        question: "What is Jorge's last name?",
        answers: [
            { text: "Armani", correct: false},
            { text: "Parente", correct: true},
            { text: "Al Pacino", correct: false},
            { text: "Achiles", correct: false},
        ]
    },
    {
        question: "What's my Birthday Date?",
        answers: [
            { text: "9th September", correct: false},
            { text: "11th September", correct: false},
            { text: "13th September", correct: true},
            { text: "19th September", correct: false},
        ]
    },
    {
        question: "What is my Star",
        answers: [
            { text: "Scorpion", correct: false},
            { text: "Capricorn", correct: false},
            { text: "Cancer", correct: false},
            { text: "Virgo", correct: true},
        ]
    },
    {
        question: "What is the most annoying trait I have?",
        answers: [
            { text: "Being awesome", correct: true},
            { text: "Being amazing", correct: true},
            { text: "Being wonderful", correct: true},
            { text: "All of them", correct: true},
        ]
    },
    {
        question: "What's my fave animal?",
        answers: [
            { text: "Jaguar", correct: true},
            { text: "Dog", correct: false},
            { text: "Lion", correct: false},
            { text: "Mantis", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
